import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,

  templateUrl: './distancia.html',
})
export class Distancia {

  x1: string = '';
  x2: string = '';
  y1: string = '';
  y2: string = '';
  resultado: number = 0;

  calcular(): void {
    this.resultado = Math.sqrt(Math.pow(+this.x2 - +this.x1, 2) + Math.pow(+this.y2 - +this.y1, 2));
  }


}
