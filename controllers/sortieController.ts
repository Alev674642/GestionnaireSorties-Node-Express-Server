const SortieSchema = require("../models/sortieSchema");
import {Request, Response, NextFunction} from "express"
import { ISortie } from "../models/sortieSchema";

exports.createSortie = (req: Request, res: Response, next: NextFunction) => {
  delete req.body._id;
  const newSortie = new SortieSchema({ ...req.body });
  newSortie
    .save()
    .then(() =>
      res.status(201).json({
        message: "Objet créé!",
        newId: newSortie._id,
        newObject: JSON.stringify(req.body),
      })
    )
    .catch((error:any) => res.status(400).json({ error }));
};

exports.updateSortie = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  SortieSchema.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => {
      res.status(200).json({ message: "Objet modifié", _id: req.params.id });
    })
    .catch((error:any) => res.status(400).json({ error }));
};

exports.deleteSortie = (req: Request, res: Response, next: NextFunction) => {
  SortieSchema.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé" }))
    .catch((error:any) => res.status(400).json({ error }));
};

exports.readAllSorties = (req: Request, res: Response) => {
  console.log("readAllSorties");
  SortieSchema.find()
    .then((sorties: ISortie) => res.status(200).json(sorties))
    .catch((error:any) => res.status(400).json(error));
};

exports.readOneSortie = (req: Request, res: Response) => {
  SortieSchema.findOne({ _id: req.params.id })
    .then((sortie : ISortie) => res.status(200).json(sortie))
    .catch((error:any) => res.status(400).json({ error }));
};
