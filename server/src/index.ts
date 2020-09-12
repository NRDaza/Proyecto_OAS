import express, {Application} from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRutas from './rutas/indexRutas';
import partidoRutas from './rutas/partidoRutas';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.configuracion();
        this.rutas();

    }

    configuracion(){
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

    }

    rutas():void{
        this.app.use('/',indexRutas);
        this.app.use('/partidos',partidoRutas)


    }

    start(){

        this.app.listen(this.app.get('port'), ()=>{
            console.log("server on port", this.app.get('port'));
        })
    }

}

const server = new Server();
server.start();