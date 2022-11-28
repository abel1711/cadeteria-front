import { FormLoginValues } from "../interfaces/interface";


export const login = async( values: FormLoginValues ) =>{
    try {
        const resp = await fetch('http://localhost:8080/api/auth/login', {
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