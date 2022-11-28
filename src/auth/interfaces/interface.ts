
// tipos del formulario para el login
export interface FormLoginValues {
	telefono: string;
	password: string;
};

//tipos del formulario para el registro de usuario
export interface FormRegistroValues {
	nombre: string;
	telefono: string;
	email: string
	password: string;
	direccion: {
		calle: string;
		numero: string;
		ciudad: string;
	}
}