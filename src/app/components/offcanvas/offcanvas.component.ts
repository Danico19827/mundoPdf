import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})


export class OffcanvasComponent {
[x: string]: any;

  constructor(){}

  contadorTema = 0
  claro = true

  cambiarTema(){

    this.contadorTema = this.contadorTema + 1
    if(this.contadorTema == 2){ 
      if(document.getElementById("offcanvasTema")!.className == "temaOscuro"){
        document.getElementById("offcanvasTema")!.className = "temaClaro"
        this.claro = true
      } else{
        document.getElementById("offcanvasTema")!.className = "temaOscuro"
        this.claro = false
      }
      this.contadorTema = 0
    }
  }

}




