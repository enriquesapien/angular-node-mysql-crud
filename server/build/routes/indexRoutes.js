"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    // To setup the routes to be served by this router
    config() {
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}
const indextRoutes = new IndexRoutes();
exports.default = indextRoutes.router;
