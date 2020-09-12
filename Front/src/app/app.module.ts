import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { CommonModule } from "@angular/common";
import { FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { TablaEquiposComponent } from './componentes/tabla-equipos/tabla-equipos.component';
import { PartidosComponent } from './componentes/partidos/partidos.component';
import { EquiposService } from './servicios/equipos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FormularioComponent,
    TablaEquiposComponent,
    PartidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EquiposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
