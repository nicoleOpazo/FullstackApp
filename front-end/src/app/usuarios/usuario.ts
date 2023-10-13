export class Usuario {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;
    fechaCreacion: Date;


    constructor(
        id: number,
        nombre: string,
        edad: number,
        activo: boolean,
        fechaCreacion: Date
    ) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.activo = activo;
        this.fechaCreacion = fechaCreacion;
    }

}
