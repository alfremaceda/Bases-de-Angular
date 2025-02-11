import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${ this.nombre} - ${this.edad}`
    }

    //concepto one way data binding = enlazado de una sola via

    cambiarNombre() : void {
        this.nombre = 'spiderman';

    }

    cambiarEdad() : void {
        this.edad = 30;
    }

    
}