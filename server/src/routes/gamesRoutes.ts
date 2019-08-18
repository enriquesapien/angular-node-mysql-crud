
import { Router } from 'express';

import gamesController from '../controllers/gamesController';

class GamesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    // To setup the routes to be served by this router
    config(): void {
        this.router.get('/', gamesController.index);
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
