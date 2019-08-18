import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public index (req: Request, res: Response) {
        //res.send('Hello from Games controller');

        // to force DB connection
        pool.query('DESCRIBE game;');
        res.json('games');
    }

}

const gamesController = new GamesController();
export default gamesController;

