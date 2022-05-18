const express = require("express");
const sortieRouter = express.Router();
const SortieSchema = require("../models/sortieSchema");
const sortieController = require("../controllers/sortieController");
const auth = require("../middleware/auth");

//POST CREATION ARTICLE
sortieRouter.post("/", auth, sortieController.createSortie);

//Modification d'un article
sortieRouter.put("/:id", auth, sortieController.updateSortie);

//Suppression d'un article
sortieRouter.delete("/:id", auth, sortieController.deleteSortie);

//Liste des articles
sortieRouter.get("/", auth, sortieController.readAllSorties);

//Info d'un article
sortieRouter.get("/:id", auth, sortieController.readOneSortie);

module.exports = sortieRouter;
