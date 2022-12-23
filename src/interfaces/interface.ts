
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
	numero:        string;
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
	_id?:                    string;
	about:                  string;
	mision:                 string;
	objetivos:              string;
	servicios:              Servicio[];
	ciudades:               string[];
	__v?:                    number;
	descripcionPACK:     string;
	descriptionMOTOPACK: string;
}

export interface Servicio {
	titulo: string;
	texto:  string;
	_id?:    string;
}

//tipado al formulario para crear orden sin domicilio remitente


export interface FormSinDomicilioRemitente {
	infoPaquete:  InfoPaquete;
	tipoDeOrden:  string;
	destinatario: Destinatario;
}

export interface Destinatario {
	datosPersonales: DatosPersonales;
	direccion:       Direccion;
}

export interface DatosPersonales {
	nombre:   string;
	telefono: string;
	email:    string;
}

//tipado al fomulario con domicilio de remitente


export interface FormConDomicilioRemitente {
	puntoOrigen:  PuntoOrigen;
	infoPaquete:  InfoPaquete;
	tipoDeOrden:  string;
	destinatario: Destinatario;
}

export interface PuntoOrigen {
	calle:         string;
	numero:        string;
	ciudad:        string;
	infoAdicional: string;
}

export interface InfoPaquete {
	largo: string;
	ancho: string;
	alto:  string;
	peso:  string;
	costo: string;
}






