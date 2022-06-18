"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express");
const express = require("express");
const articleRouter = express.Router();
const articleController = require("../controllers/articleController");
//POST CREATION ARTICLE
articleRouter.post("/", articleController.createArticle);
//Modification d'un article
articleRouter.put("/:id", articleController.updateArticle);
//Suppression d'un article
articleRouter.delete("/:id", articleController.deleteArticle);
//Liste des articles
articleRouter.get("/", articleController.readAllArticles);
//Info d'un article
articleRouter.get("/:id", articleController.readOneArticle);
module.exports = articleRouter;
