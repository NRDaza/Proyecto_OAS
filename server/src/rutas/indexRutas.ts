import { Router } from 'express';

import  { controlIndex }  from '../Control/controlIndex';



class IndexRutas{

    public ruta: Router= Router();

    constructor(){
        this.configuracion();


    }

    configuracion(): void{
        this.ruta.get('/', controlIndex.lista);
        this.ruta.post('/', controlIndex.agregar);
        this.ruta.delete('/:id', controlIndex.quitar);
        this.ruta.put('/:id', controlIndex.actualizar);
        this.ruta.get('/orden', controlIndex.ordenar);

    }

}

const indexRutas = new IndexRutas();
export default indexRutas.ruta;