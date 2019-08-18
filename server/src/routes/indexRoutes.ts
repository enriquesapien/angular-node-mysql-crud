
import { Router } from 'express';


class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    // To setup the routes to be served by this server
    config(): void {
        this.router.get('/', (req, res) => res.send('Hello'));
    }

}

const indextRoutes = new IndexRoutes();
export default indextRoutes.router;