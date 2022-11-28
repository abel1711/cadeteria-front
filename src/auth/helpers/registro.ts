import { FormRegistroValues } from "../interfaces/interface";



export const registro = async (values: FormRegistroValues) => {

    try {
        const resp = await fetch('http://localhost:8080/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const usuario = await resp.json();
        return usuario;
    } catch (error) {
        console.log(error)
    }
}