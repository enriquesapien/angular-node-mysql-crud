import { Request, Response } from 'express';

class GamesController {

    public index (req: Request, res: Response) {
        res.send('Hello from Games controller')
    }

}

const gamesController = new GamesController();
export default gamesController;
