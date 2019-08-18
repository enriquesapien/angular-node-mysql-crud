import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response) {
        const games = await pool.query('select * from game');
        res.json(games);
    }

    public getOne (req: Request, res: Response) {
        res.json({text: 'Getting a game: ' + req.params.id });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('insert into game set ?', [req.body]);
        res.json({message: 'Game saved'});
    }

    public update (req: Request, res: Response) {
        res.json({text: 'Updating a game: ' + req.params.id });
    }

    public delete (req: Request, res: Response) {
        res.json({text: 'Deleting a game: ' + req.params.id });
    }




}

const gamesController = new GamesController();
export default gamesController;

