import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';
import { PersonajesComponent } from '../personajes/personajes.component';

@Injectable()
export class DbzService{
    
    private _personajes: Personaje[] = [
     
        {
          nombre: 'goku',
          poder: 10000
        },
        {
          nombre: 'vegeta',
          poder: 7000
        },
        {
          nombre: 'Trunks',
          poder: 30000
        }
      
    ];

    get personajes() : Personaje[]
    {
        return [...this._personajes];
    }
    constructor(){}
         agregarNuevoPersonaje(personaje: Personaje){
            this._personajes.push(personaje)
          }
    
    
}