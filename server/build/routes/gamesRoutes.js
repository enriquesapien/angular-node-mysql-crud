"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    // To setup the routes to be served by this router
    config() {
        this.router.get('/', (req, res) => res.send('Hello from Games'));
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
