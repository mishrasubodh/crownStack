import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from "cors";
import * as helmet from "helmet";
import Database from "./config/Database";

class App {
  public app: express.Application;
  public port: number;
 
  constructor(router, port) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(router);
  }
 
  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(router) {
    this.app.use('/', router);
  }
 
  public listen() {
    Database.open({ mongoUrl: 'mongodb+srv://<username>:<password>@cluster0.vkqdh.mongodb.net/<db>?retryWrites=true&w=majority' })
      .then(() => {
        this.app.listen(this.port, () => {
          console.log(`App listening on the port ${this.port}`);
        });
      });
  }
}
 
export default App;