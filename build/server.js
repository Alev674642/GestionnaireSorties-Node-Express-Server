"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app = require("./app");
app.set("port", process.env.PORT || 5000);
const server = http.createServer(app);
server.listen(process.env.PORT || 5000);
console.log("Server started and listenning on port " + (process.env.PORT || 5000));
