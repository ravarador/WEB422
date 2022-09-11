const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const MoviesDB = require("./modules/moviesDB");
const db = new MoviesDB();

const app = express();

app.use(express.json());

app.use(cors());

const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({ message: "API Listening" });
})

// POST /api/movies

// GET /api/movies
app.get("/api/movies/", (req, res) => {
    var page = req.query.page;
    var perPage = req.query.perPage;
    var title = req.query.title;

    db.getAllMovies(page, perPage, title).then(data => {
        res.json(data);
    }).catch((err) => {
        res.status(404).json({message: err});
    })
})

// GET /api/movies/:id

// PUT /api/movie

// DELETE /api/movies

db.initialize(process.env.MONGODB_CONN_STRING).then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err) => {
    console.log(err);
});