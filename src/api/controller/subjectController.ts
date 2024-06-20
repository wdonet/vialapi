import { Request, Response } from 'express';
import {addSubject, changeSubject,  getByPage, removeSubject } from "../service/subjectService";

export const filterByPage = async (req: Request, res: Response) => res
    .status(200)
    .json(await getByPage(req.query));

export const createSubject = async (req: Request, res: Response) => res
    .status(200)
    .json(await addSubject(req.body));

export const updateSubject = async (req: Request, res: Response) => {
    const { id } = req.params || {};
    res
      .status(200)
      .json(await changeSubject(parseInt(id), req.body));
}

export const deleteSubject = async (req: Request, res: Response) => {
    const { id } = req.params || {};
    res
      .status(200)
      .json(await removeSubject(parseInt(id)));
}
