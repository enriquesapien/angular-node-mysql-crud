import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        //res.send('Hello from Index controller');
        res.json({text: 'API is /api/games'});
    }

}

const indexController = new IndexController();
export default indexController;
