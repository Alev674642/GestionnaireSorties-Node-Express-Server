"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const sortieRouter = express.Router();
const SortieSchema = require("../models/sortieSchema");
const sortieController = require("../controllers/sortieController");
const auth = require("../middleware/auth");
//POST CREATION evenement
sortieRouter.post("/", auth, sortieController.createSortie);
//Modification d'un evenement
sortieRouter.put("/:id", auth, sortieController.updateSortie);
//signaler un evenement
sortieRouter.put("/signaler/:id", auth, sortieController.updateSortie);
//Suppression d'un evenement
sortieRouter.delete("/:id", auth, sortieController.deleteSortie);
//Liste des evenements
sortieRouter.get("/", auth, sortieController.readAllSorties);
//Info d'un evenement
sortieRouter.get("/:id", auth, sortieController.readOneSortie);
module.exports = sortieRouter;
