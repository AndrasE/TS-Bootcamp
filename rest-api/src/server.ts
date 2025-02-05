import express from "express";
import {root} from "./routes/root";

const app  = express();

function setupExpress() {
    // http://localhost:3000/
    app.route("/").get(root);
}

function startServer() {
    app.listen(3000, ()=> {
        console.log("Server started on port 3000");
    });
}

setupExpress();

startServer();

