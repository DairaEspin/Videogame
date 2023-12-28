const { Router } = require ('express');

const { allVideogames ,byIdVideogames, byNameVideogames, createVideogames } = require ("../handlers/videoHandlers");

const videoRouter = Router();

videoRouter.get("/", allVideogames);
videoRouter.get("/:id", byIdVideogames );
videoRouter.get("/name", byNameVideogames )
videoRouter.post("/", createVideogames );

module.exports = videoRouter;