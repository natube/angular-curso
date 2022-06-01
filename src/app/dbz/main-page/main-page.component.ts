import { Component } from '@angular/core';

import { Personaje } from '../Interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    power: 110000
  }

  constructor() {}
  /* get personajes(): Personaje[] {
    return this.dbzService.personajes;
  } */

  /* addNewCharacter( character: Personaje ) {
    console.log('Main Page Component');
    console.log(character);
    this.personajes.push( character );
  } */
 
  /* constructor(private dbzService: DbzService){
    
  } */
}
