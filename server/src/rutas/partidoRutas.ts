import { Router } from 'express';
import { controlPartido } from '../Control/controlPartido';

class RutaPartido{

    public ruta: Router= Router();

    constructor(){
        this.configuracion();


    }

    configuracion(): void{
        this.ruta.get('/',controlPartido.index);
        

    }

}

const rutaPartido = new RutaPartido();
export default rutaPartido.ruta;