import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          power: 15000
        },
        {
          nombre: 'Krillin',
          power: 700
        },
        {
          nombre: 'Vegeta',
          power: 8500
        }
    ];


    get characters(): Personaje[] {
        return [...this._personajes];
    }
    constructor(){
       /*  console.log("Servicio Inicializado"); */
    }

    agregarPersonaje (personaje: Personaje) {
        this._personajes.push( personaje );
    } 
}