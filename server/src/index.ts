import express, { Application } from 'express';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        // if there is a port in the environment 
        // (e.g. provided by cloud service like Heroku, etc)
        // use it. otherwise, use 3000
        this.app.set('port', process.env.PORT || 3000);
    }

    routes(): void {

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ', this.app.get('port'));
        });
    }
}


const server = new Server();

server.start();