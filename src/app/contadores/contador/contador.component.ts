import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>
        <!-- Hola Mundo -->
        {{ titulo }}
        
        </h1>
        <h3>
        La base es: 
        <strong>
            {{ base }}
        </strong>
        </h3>
        <button (click) = "acumularSoR(base);">+ {{ base }}</button>
        <span> {{numero}} </span>
        <button (click) = "acumularSoR(-base)">- {{ base }}</button>
    `
})



export class ContadorComponent {
    public titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acumularSoR( valor: number ): void {
      this.numero += valor;
    }
  }