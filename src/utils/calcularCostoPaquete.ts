import { InfoPaquete } from '../interfaces/interface'

export const calcularCostoPaquete = (infoPaquete: InfoPaquete, precioBase : String) => {
    
    const { alto, ancho, largo, peso } = infoPaquete;

    const volumen = Number(alto) * Number(ancho) * Number(largo);

    console.log(volumen)

}