"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Article = require("../models/article");
exports.createArticle = (req, res, next) => {
    delete req.body._id;
    const newArticle = new Article(Object.assign({}, req.body));
    newArticle
        .save()
        .then(() => res
        .status(201)
        .json({ message: "Objet créé  : " + JSON.stringify(req.body) }))
        .catch((error) => res.status(400).json({ error }));
};
exports.updateArticle = (req, res, next) => {
    Article.updateOne({ _id: req.params.id }, Object.assign(Object.assign({}, req.body), { _id: req.params.id }))
        .then(() => {
        res.status(200).json({ message: "Objet modifié" });
    })
        .catch((error) => res.status(400).json({ error }));
};
exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet supprimé" }))
        .catch((error) => res.status(400).json({ error }));
};
exports.readAllArticles = (req, res) => {
    Article.find()
        .then((articles) => res.status(200).json(articles))
        .catch((error) => res.status(400).json(error));
};
exports.readOneArticle = (req, res) => {
    Article.findOne({ _id: req.params.id })
        .then((article) => res.status(200).json(article))
        .catch((error) => res.status(400).json({ error }));
};
