import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Equipos} from '../modelo/Equipos';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  URI = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getEquipos(){
    return this.http.get(`${this.URI}`);
  }

  addEquipos(equipo:Equipos){
    return this.http.post(`${this.URI}`,equipo);
  }

  deleteEquipo(id:string){
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateEquipo(id: string |number , equipo:Equipos){
    console.log(`${this.URI}/${id}`,equipo);
    console.log(equipo);

    return this.http.put(`${this.URI} ${id}`,equipo);
  }
  
  ordenarEquipos(){
    return this.http.get(`${this.URI}orden`);
  }

}
