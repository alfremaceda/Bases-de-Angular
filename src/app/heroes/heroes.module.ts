import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //componentes que contenga este modulo 
    declarations : [
HeroeComponent,
ListadoComponent
    ],
    //ccomponentes, servicios etc que van a ser visibles a fuera de este modulo
    exports: [
    ListadoComponent
    ],

    imports:[
        CommonModule

    ],

})

export class HeroesModule {

}