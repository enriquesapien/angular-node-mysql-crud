"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    // To setup the routes to be served by this router
    config() {
        this.router.get('/', gamesController_1.default.index);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
