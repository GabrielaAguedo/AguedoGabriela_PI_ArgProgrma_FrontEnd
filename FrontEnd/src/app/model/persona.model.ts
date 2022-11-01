export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    email: string;
    profesion: string;
    imgPerfil: string;
    
    constructor(nombre: string, apellido:string, descripcion:string, email: string, profesion: string, imgPerfil:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.email = email;
        this.profesion = profesion;
        this.imgPerfil = imgPerfil;
    }
}