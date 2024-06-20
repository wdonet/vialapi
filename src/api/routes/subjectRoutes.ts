import express from 'express';
import { filterByPage, createSubject, updateSubject, deleteSubject } from '../controller/subjectController';


const subjectRouter = express.Router();

subjectRouter.route('/')
  .get(filterByPage)
  .post(createSubject);

subjectRouter.route('/:id')
  .put(updateSubject)
  .delete(deleteSubject);

export default subjectRouter;
