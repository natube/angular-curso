import { Component, Input} from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.characters;
  }

  constructor (private dbzService: DbzService) {
    
  }
}
