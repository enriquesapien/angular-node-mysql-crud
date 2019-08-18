
import { Router } from 'express';


class GamesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    // To setup the routes to be served by this router
    config(): void {
        this.router.get('/', (req, res) => res.send('Hello from Games'));
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
