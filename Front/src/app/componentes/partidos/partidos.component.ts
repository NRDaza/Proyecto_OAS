import { Component, OnInit } from '@angular/core';
import { Equipos, Goles } from 'src/app/modelo/Equipos';
import {EquiposService} from '../../servicios/equipos.service';
import { Router} from '@angular/router'
import { BrowserTransferStateModule } from '@angular/platform-browser';


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
   


  equipos: any = [];
  id: any;
  goles: Goles ={
    GolL1:0,
    GolV1:0,
    GolL2:0, 
    GolV2:0,
  }

// gol =["GolL1","GolV1","GolL2","GolV2","GolL3","GolV3","GolL4","GolV4","GolL5","GolV5","GolL6","GolV6"];
  constructor(private equipoServicio: EquiposService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos(){
    this.equipoServicio.getEquipos().subscribe(
      res => {
        this.equipos = res;
        console.log(this.equipos);

      },
      err => console.error(err),

    );

  }


  updateTable(){
   
    this.equipoServicio.updateEquipo(this.id,this.equipos).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/tablaPos']);
        //this.equipos = res;
      },
      err => console.error(err),

    );

  }
  
  victoria(){
    if (this.goles.GolL1 > this.goles.GolV1){
      this.equipos[0].puntos  +=3;
      
      
    
    }
    else if (this.goles.GolL1 < this.goles.GolV1){
      console.log("gano visita");
      this.equipos[1].puntos +=3;
      
    }
    else if (this.goles.GolL1 == this.goles.GolV1){
      console.log("empate");
      this.equipos[0].puntos +=1;
      this.equipos[1].puntos += 1;
    }

 

    if (this.goles.GolL2 > this.goles.GolV2){
      console.log("gano locall");
      this.equipos[2].puntos +=3;
      
    }
    else if (this.goles.GolL2 < this.goles.GolV2){
      console.log("gano visita");
      this.equipos[3].puntos  +=3;
     
    }
    else if (this.goles.GolL2 == this.goles.GolV2){
      console.log("empate");
      this.equipos[2].puntos +=1;
      this.equipos[3].puntos +=1;
    }


    this.updateTable();

  }

  reiniciarTabla(){

    this.equipos[0].puntos=0;
    this.equipos[1].puntos=0;
    this.equipos[2].puntos=0;
    this.equipos[3].puntos=0;
    this.updateTable();
      
  }
 



}
