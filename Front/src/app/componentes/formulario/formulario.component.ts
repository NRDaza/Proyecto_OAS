import { Component, OnInit } from '@angular/core';
import { Equipos } from 'src/app/modelo/Equipos';
import {EquiposService} from '../../servicios/equipos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  equi: Equipos = {
    // id: 0,
    pos: 1,
    equipo: '',
    puntos: 0
  };

  constructor( private equipoServicio: EquiposService) { }

  ngOnInit(): void {
  }

  agregarEquipo(){
    
    this.equipoServicio.addEquipos(this.equi).subscribe(
      res => {
        console.log(res)
        //this.equipos = res;
      },
      err => console.error(err),

    );
    
  }

}
