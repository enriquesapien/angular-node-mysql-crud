
import { Router } from 'express';

import indexController from '../controllers/indexController';


class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    // To setup the routes to be served by this router
    config(): void {
        this.router.get('/', indexController.index);
    }

}

const indextRoutes = new IndexRoutes();
export default indextRoutes.router;