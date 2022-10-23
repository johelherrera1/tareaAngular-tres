import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-dinamica2',
  templateUrl: './tarjeta-dinamica2.component.html',
  styleUrls: ['./tarjeta-dinamica2.component.css']
})
export class TarjetaDinamica2Component implements OnInit {
  edad = 18

  incrementarEdad(){
    this.edad+=1
  }
  decrementarEdad(){
    this.edad-=1
  }

  lenguajes:Array<string>=["Python","Css","Java"]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
