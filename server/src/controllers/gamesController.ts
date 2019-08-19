import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public async list (req: Request, res: Response) {
        const games = await pool.query('select * from game');
        res.json(games);
    }

    public async getOne (req: Request, res: Response): Promise<any> {

        // destructuring
        const { id } = req.params;
        const games = await pool.query('select * from game where game_id = ?', [id]);

        if (games.length > 0) {
            return res.json(games[0]);
        }

        res.status(404).json({ message: 'The game does not exist' });
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('insert into game set ?', [req.body]);
        res.json({ message: 'Game saved' });
    }

    public async update (req: Request, res: Response): Promise<void> {

        // destructuring
        const { id } = req.params;
        await pool.query('update game set ? where game_id = ?', [req.body, id]);
        res.json({ message: 'The game has been updated' });
    }

    public async delete (req: Request, res: Response): Promise<void> {

        // destructuring
        const { id } = req.params;
        await pool.query('delete from game where game_id = ?', [id]);
        res.json({ message: 'The game has been deleted' });
    }
}

const gamesController = new GamesController();
export default gamesController;

