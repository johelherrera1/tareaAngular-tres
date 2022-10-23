import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-programador',
  templateUrl: './tarjeta-programador.component.html',
  styleUrls: ['./tarjeta-programador.component.css']
})
export class TarjetaProgramadorComponent implements OnInit {
  edad = 18

  incrementarEdad(){
    this.edad+=1
  }
  decrementarEdad(){
    this.edad-=1
  }

  lenguajes:Array<string>=["CSS","Javascript",""]
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
