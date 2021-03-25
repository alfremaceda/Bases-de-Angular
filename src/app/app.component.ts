import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
  //template: `HOLA otra vez`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';

  numero : number =10;
  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }
   
  acumular (valor: number){
    this.numero += valor;
  }

  //tarea con el contador
  base: number = 10;

}
