import { ListaItem } from './lista-item.model';


export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    termindaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {

        this.titulo = titulo;

        this.creadaEn = new Date();
        this.termindaEn = new Date();
        this.items = [];

        this.id = new Date().getTime();

    }

}