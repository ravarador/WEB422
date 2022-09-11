const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({ message: "API Listening"});
})

app.listen(HTTP_PORT, () => {
    console.log("Server listening on: " + HTTP_PORT);
})