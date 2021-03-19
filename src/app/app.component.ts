import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';
  iEdadUno:number = 0;
  iEdadDos:number = 0;
  iPromedio:number = 0;
  iSuma:number = 0;

  cambiarTitulo(){
    this.title = "otro titulo"
  }

  promedio(){
    this.iPromedio = (parseInt(this.iEdadUno.toString()) + parseInt(this.iEdadDos.toString())) / 2
  }

  sumar(){
    this.iSuma = parseInt(this.iEdadUno.toString()) + parseInt(this.iEdadDos.toString());
  }
}
