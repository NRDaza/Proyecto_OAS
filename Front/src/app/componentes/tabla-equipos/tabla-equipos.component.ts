import { Component, OnInit } from '@angular/core';
import {EquiposService} from '../../servicios/equipos.service';

@Component({
  selector: 'app-tabla-equipos',
  templateUrl: './tabla-equipos.component.html',
  styleUrls: ['./tabla-equipos.component.css']
})
export class TablaEquiposComponent implements OnInit {

  equipos: any = [];


  constructor(private equipoService: EquiposService) { 
  

  }

  ngOnInit(): void {
    this.getEquipos();

  }

  getEquipos(){
    this.equipoService.ordenarEquipos().subscribe(
      res => {
        this.equipos = res;
        console.log(this.equipos);
      },
      err => console.error(err),

    );

  }
  
}

