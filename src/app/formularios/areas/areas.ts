import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {  
  base: string = '';
  altura: string = '';
  radio: string = '';
  perimetro: string = '';
  apotema: string = '';
  resultado: number = 0;
  
  operacion: string = 'triangulo';

 

  calcular(): void {
    switch (this.operacion) {
      case 'triangulo':
        this.resultado = (parseInt(this.base) * parseInt(this.altura)) / 2;
        break;
      case 'circulo':
        this.resultado = 3.1416 * parseInt(this.radio) * parseInt(this.radio);
        break;
      case 'rectangulo':
        this.resultado = parseInt(this.base) * parseInt(this.altura);
        break;
      case 'pentagono':
        this.resultado = (parseInt(this.perimetro) * parseInt(this.apotema)) / 2;
        break;
    }
  }
}