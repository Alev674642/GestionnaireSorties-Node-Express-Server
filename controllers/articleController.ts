const Article = require("../models/article");
import {Request, Response, NextFunction} from "express"
import { Iarticle } from "../models/article";

exports.createArticle = (req: Request, res: Response, next: NextFunction) => {
  delete req.body._id;
  const newArticle = new Article({ ...req.body });
  newArticle
    .save()
    .then(() =>
      res
        .status(201)
        .json({ message: "Objet créé  : " + JSON.stringify(req.body) })
    )
    .catch((error:any) => res.status(400).json({ error }));
};

exports.updateArticle = (req: Request, res: Response, next: NextFunction) => {
  Article.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Objet modifié" });
    })
    .catch((error:any) => res.status(400).json({ error }));
};

exports.deleteArticle = (req: Request, res: Response, next: NextFunction) => {
  Article.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé" }))
    .catch((error:any) => res.status(400).json({ error }));
};

exports.readAllArticles = (req: Request, res: Response) => {
  Article.find()
    .then((articles : Iarticle) => res.status(200).json(articles))
    .catch((error:any) => res.status(400).json(error));
};

exports.readOneArticle = (req: Request, res: Response) => {
  Article.findOne({ _id: req.params.id })
    .then((article: Iarticle) => res.status(200).json(article))
    .catch((error:any) => res.status(400).json({ error }));
};
