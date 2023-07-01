const express = require("express");
const rutCamaras = express.Router();

const contCamaras = require("../controllers/contCamaras");

//agregar Camaras a través de un formulario
rutCamaras.post("/", contCamaras.addOne);

//mostrar todas las Camaras
rutCamaras.get("/",contCamaras.showAll);

//mostrar una camara
rutCamaras.get("/:nombreCamara", contCamaras.showOne);

//buscar una camara por el nombreCamara

rutCamaras.post("/search", contCamaras.searchCam);

module.exports = rutCamaras;