"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SortieSchema = require("../models/sortieSchema");
exports.createSortie = (req, res, next) => {
    delete req.body._id;
    const newSortie = new SortieSchema(Object.assign({}, req.body));
    newSortie
        .save()
        .then(() => res.status(201).json({
        message: "Objet créé!",
        newId: newSortie._id,
        newObject: JSON.stringify(req.body),
    }))
        .catch((error) => res.status(400).json({ error }));
};
exports.updateSortie = (req, res, next) => {
    console.log(req.body);
    SortieSchema.updateOne({ _id: req.params.id }, Object.assign(Object.assign({}, req.body), { _id: req.params.id }))
        .then(() => {
        res.status(200).json({ message: "Objet modifié", _id: req.params.id });
    })
        .catch((error) => res.status(400).json({ error }));
};
exports.deleteSortie = (req, res, next) => {
    SortieSchema.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet supprimé" }))
        .catch((error) => res.status(400).json({ error }));
};
exports.readAllSorties = (req, res) => {
    console.log("readAllSorties");
    SortieSchema.find()
        .then((sorties) => res.status(200).json(sorties))
        .catch((error) => res.status(400).json(error));
};
exports.readOneSortie = (req, res) => {
    SortieSchema.findOne({ _id: req.params.id })
        .then((sortie) => res.status(200).json(sortie))
        .catch((error) => res.status(400).json({ error }));
};
