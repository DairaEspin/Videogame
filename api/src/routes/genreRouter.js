const { Router } = require ('express');

const allGenre = require ("../handlers/genreHandlers");

const genreRouter = Router();

genreRouter.get("/", allGenre);

module.exports = genreRouter;