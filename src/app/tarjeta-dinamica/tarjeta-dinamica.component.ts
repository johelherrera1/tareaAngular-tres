import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-dinamica',
  templateUrl: './tarjeta-dinamica.component.html',
  styleUrls: ['./tarjeta-dinamica.component.css']
})
export class TarjetaDinamicaComponent implements OnInit {
  edad = 18

  incrementarEdad(){
    this.edad+=1
  }
  decrementarEdad(){
    this.edad-=1
  }

  hobbies:Array<string>=["Comer","Salir a correr","Escuchar musica"]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
