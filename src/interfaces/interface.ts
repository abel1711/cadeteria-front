
//1. interfaces relacionadas a la autenticacion

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

//tipos de respuesta para el login o registro de usuario

export interface RespLogin {
	token:   string;
	usuario: Usuario;
}

export interface Usuario {
	nombre:     string;
	telefono:   string;
	email:      string;
	direccion:  Direccion;
	rol:        string;
	estado:     boolean;
	misOrdenes: any[];
	createdAt:  string;
	updatedAt:  string;
	uid:        string;
}

export interface Direccion {
	calle:         string;
	numero:        number;
	ciudad:        string;
	infoAdicional?: string;
}

//tipado de la respuesta del login o registro cuando tenemos error

export interface RespErrors {
	errors: ErrorAuth[];
}

export interface ErrorAuth {
	value?:    string;
	msg:      string;
	param?:    string;
	location?: string;
}

// resp al tipado cuando obtenemos la informacion de la cadeteria

export interface RespDataPage {
	_id?:       string;
	about:     string;
	mision:    string;
	objetivos: string;
	servicios: Servicio[];
	ciudades:  string[];
	__v?:       number;
}

export interface Servicio {
	titulo: string;
	texto:  string;
	_id?:    string;
}
