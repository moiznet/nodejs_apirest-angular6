 

export class origen {


constructor(
	public n_origen: string,
    public o_lat: number,
	public o_long: number
	){}
}
export class destino {


constructor(
	public n_destino: string,
    public d_lat: number,
	public d_long: number
	){}
}
export class conductor {


constructor(
	public asignado: boolean,
    public id: string,
	public nombre_cond: string
	){}
}


export class vehiculo {


constructor(
	public _id: string,
    public t_vehiculo: string,
	public placas: string,
	public soat: string,
	public fecha: string,
	public origen: origen,
	public destino: destino,
	public conductor : conductor

	){}
}