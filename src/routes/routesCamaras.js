const express = require("express");
const rutCamaras = express.Router();

const contCamaras = require("../controllers/contCamaras");

//agregar Camaras a través de un formulario
rutCamaras.post("/", contCamaras.addOne);

//mostrar todas las Camaras
rutCamaras.get("/",contCamaras.showAll);

//buscar una camara por el nombreCamara
rutCamaras.post("/search", contCamaras.searchCam);

//borrar una camara de la bd
rutCamaras.delete("/delete", contCamaras.delCamara);

//modificar una camara con put
rutCamaras.put("/",contCamaras.modificaCamara);

//el formulario va con methode = post pero emulado a put 
//modificar una marca
//rutMarcas.put("/modifica",contCamaras.modificaCamara);
//mostrar una camara
rutCamaras.get("/:nombreCamara", contCamaras.showOne);



module.exports = rutCamaras;