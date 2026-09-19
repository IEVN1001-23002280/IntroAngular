import { Component } from '@angular/core';
import {IHeroes} from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  //styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})

export class HeroesList {
imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }

  heroes:IHeroes[]=[
    
  {
    imagen:'https://dragonball-api.com/characters/celula.webp',
    nombre:'CELL',
    description:'El androide perfecto',
    race:'Androide',
    ki:5000000
    },
        {
    imagen:'https://dragonball-api.com/characters/gohan.webp',
    nombre:'Gohan',
    description:'El hijo do goki',
    race:'Saiyan',
    ki:6000000
    },
        {
    imagen:'https://dragonball-api.com/characters/Krilin_Universo7.webp',
    nombre:'Krillin',
    description:'El humano mas fuerte',
    race:'Androide',
    ki:800000
    },
        {
    imagen:'https://dragonball-api.com/characters/Gotenks_Artwork.webp',
    nombre:'Gotenks',
    description:'La Fusion mas fuerte',
    race:'Saiyan',
    ki:8500000
    }
    
  ]
}
