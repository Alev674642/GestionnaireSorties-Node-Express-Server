const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import {Request, Response, NextFunction} from "express"
import { IUser } from "../models/userSchema";

exports.signup = (req: Request, res: Response, next: NextFunction) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash:any) => {
      const user = new userSchema({
        email: req.body.email,
        password: hash,
        pseudo: req.body.pseudo,
      });
      user
        .save()
        .then(() =>
          res.status(201).json({
            message: "Utilisateur créé!",
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
            pseudo: user.pseudo,
          })
        )
        .catch((error: any) => res.status(400).json({ error }));
    })
    .catch((error: any) => {
      console.log(error);
      res.status(500).json({ error });
    });
};

exports.login = (req: Request, res: Response, next: NextFunction) => {
  userSchema
    .findOne({ email: req.body.email })
    .then((user: IUser) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé!" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid:boolean) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
            message: "Utilisateur loggé",
            pseudo: user.pseudo,
          });
        })
        .catch((error: any) => res.status(500).json({ error }));
    })
    .catch((error: any) => res.status(500).json({ error }));
};
