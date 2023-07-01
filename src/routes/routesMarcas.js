const express = require("express");
const rutMarcas = express.Router();

const contMarcas = require("../controllers/contMarcas");

//agregar marcas a través de un formulario
rutMarcas.post("/", contMarcas.addOne);

//mostrar todas las marcas
rutMarcas.get("/",contMarcas.showAll);

//mostrar una marca
rutMarcas.get("/:nombreMarca", contMarcas.showOne);

module.exports = rutMarcas;