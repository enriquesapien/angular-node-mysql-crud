import { Request, Response } from 'express';

import pool from '../database';

class GamesController {

    public list (req: Request, res: Response) {
        res.json({text: 'Listing games'});
    }

    public getOne (req: Request, res: Response) {
        res.json({text: 'Getting a game: ' + req.params.id });
    }

    public create (req: Request, res: Response) {
        res.json({text: 'Creating a game'});
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

