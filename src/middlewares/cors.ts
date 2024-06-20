import cors from 'cors';
import { Express } from "express";

const addCors = (app: Express) => {
  app.use(cors());
}
export default addCors;
