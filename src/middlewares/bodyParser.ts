import bodyParser from 'body-parser';
import { Express } from "express";

const addBodyParser = (app: Express) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ type: 'application/json' }));
};

export default addBodyParser;
