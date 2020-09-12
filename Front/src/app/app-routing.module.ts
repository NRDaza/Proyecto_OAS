import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaEquiposComponent } from './componentes/tabla-equipos/tabla-equipos.component'
import { PartidosComponent } from './componentes/partidos/partidos.component'
import {FormularioComponent} from './componentes/formulario/formulario.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'

  },
  {
    path: 'inicio',
    component: FormularioComponent


  },
  {
    path: 'tablaPos',
    component: TablaEquiposComponent

  },
  {
    path: 'partidos',
    component: PartidosComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
