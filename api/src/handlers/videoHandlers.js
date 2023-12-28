const allVideogames = (req, res) => {
    res.send("NIY: ESTA RUTA TRAE TODOS LOS VIDEOGAMES")
};

const byIdVideogames = (req, res) => {
    res.send("NIY: ESTA RUTA TRAE LOS VIDEOGAMES POR ID")
};

const byNameVideogames = (req, res) => {
    res.send("NIY: ESTA RUTA TRAE LOS VIDEOGAMES POR NOMBRE")
};

const createVideogames = (req, res) => {
    res.send("NIY: ESTA RUTA CREA UN NUEVO VIDEOGAME")
};

module.exports = {
    allVideogames,
    byIdVideogames,
    byNameVideogames,
    createVideogames,
};