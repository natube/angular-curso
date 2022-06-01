import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  /* @Input() personajes: Personaje[] = []; */

  @Input() nuevo: Personaje = {
    nombre: ' ',
    power: 0
  }

  constructor( private dbzService: DbzService) {


  }

 /*  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter(); */
  
  
  /* cambiarNombre(event: any){
    console.log(event.target.value);
  } */

  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ) {return;}
    /* console.log("Hey, es una prueba"); */
    console.log(this.nuevo);
/* 
    this.onNewCharacter.emit(this.nuevo); */

    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      power: 0 
    };
   
  }

}
