const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to my favorite movie list");
});

app.get("/api/movies", (req, res) => {
    res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find((m) => m.id === movieId);

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({ message: "Not Found" });
    }
});

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

module.exports = app;
