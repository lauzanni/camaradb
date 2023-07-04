const express = require("express");
const rutMarcas = express.Router();

const contMarcas = require("../controllers/contMarcas");

//agregar marcas a través de un formulario
rutMarcas.post("/", contMarcas.addOne);

//mostrar todas las marcas
rutMarcas.get("/",contMarcas.showAll);

//BUSCAR a traves de un formulario con el nombre de una marca
rutMarcas.post("/search",contMarcas.searchMarca);

//borrar una marca
rutMarcas.delete("/delete",contMarcas.delMarca);

//modificar una marca
rutMarcas.put("/modifica",contMarcas.modificaMarca);

//mostrar una marca
rutMarcas.get("/:nombreMarca", contMarcas.showOne);



module.exports = rutMarcas;