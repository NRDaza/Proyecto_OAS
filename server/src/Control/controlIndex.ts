import { Request, Response} from 'express';
import conx from '../database';

class ControlIndex{

    public async lista (req: Request, res: Response) {
        await conx.query('SELECT * FROM equipos', function(err, equipos, fields) {
            if (err) throw err;
            res.json(equipos);
        });
    }

    public async agregar(req: Request, res: Response){
        await conx.query('INSERT INTO equipos set ?', [req.body]);
        // console.log(req.body);
        res.json('Equipo Agregado');
        
    }
    public async quitar(req: Request, res: Response){
        const {id} =req.params
        await conx.query('DELETE FROM equipos WHERE id = ?', [id]);
        res.json('equipo Eliminado ' + req.params.id);
    }
    public async actualizar(req: Request, res: Response){
        const {id} =req.params;
        console.log(req.body);
        for (let i of [0,1,2,3]){
            console.log(i);
            await conx.query('UPDATE equipos set ? WHERE id = ?', [req.body[i],i+1]);
        };
        res.json('tabla actualizada');
        
    }

    public async ordenar(req: Request, res: Response){
        await conx.query('SELECT * FROM equipos ORDER BY puntos DESC', function(err, equipos, fields) {
            if (err) throw err;
            res.json(equipos);
        });
    }    
}


export const controlIndex = new ControlIndex();