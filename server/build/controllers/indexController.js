"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        //res.send('Hello from Index controller');
        res.json({ text: 'API is /api/games' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
