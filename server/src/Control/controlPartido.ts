import { Request, Response} from 'express';

class ControlPartido{

    public index (req: Request, res: Response){
        res.send('match');

    }
}

export const controlPartido = new ControlPartido();