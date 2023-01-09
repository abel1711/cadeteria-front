import { InfoPaquete } from '../interfaces/interface'

export const calcularCostoPaquete = (infoPaquete: InfoPaquete, precioBase: String) => {

    const { alto, ancho, largo, peso, bultos } = infoPaquete;

    const volumen = Number(alto) * Number(ancho) * Number(largo);
    const precioNumber = Number(precioBase);
    const bultosNumber = Number(bultos);
    const volumenTotal = volumen * bultosNumber;
    const costoSegunVolumen =
        (volumen <= 15625) //25*25*25
            ? precioNumber
            : (volumen > 15625 && volumen <= 31250) //25*25*50
                ? precioNumber * 1.5
                : (volumen > 31250 && volumen <= 42875) //35*35*35
                    ? precioNumber * 2
                    : (volumen > 42875 && volumen <= 64000) //40*40*40
                        ? precioNumber * 2.5
                        : 0 // FALTA MANEJAR LA EXCEPCION CUANDO EL VOLUMEN DEL PAQUETE ES MUY GRANDE

    const costoMasBultos = //se calcula sumandole el 50% a partir del segundo bulto
        (bultosNumber > 1) ? costoSegunVolumen * (0.5 + (bultosNumber * 0.5)) : costoSegunVolumen;
    // volumen maximo de la camioneta en centimetros es: 2200000
    return costoMasBultos;
}