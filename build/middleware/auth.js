"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const userId = decodedToken.userId;
        console.log("userId " + userId);
        console.log("req.body.userId " + req.body.userId);
        if (req.body.userId && req.body.userId !== userId) {
            console.log("Invalid user ID");
            throw "Invalid user ID";
        }
        else {
            next();
        }
    }
    catch (_a) {
        console.log("Invalid request");
        res.status(401).json({
            error: new Error("Invalid request"),
        });
    }
};
