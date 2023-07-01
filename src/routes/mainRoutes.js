const express = require("express");
const router = express.Router();

const controller = require("../controllers/consultaController");

router.get("/",(req,res)=>{
	res.send("hola");
});

router.use('/marcas', require("./routesMarcas"));

router.use('/camaras', require("./routesCamaras"));

// router.get("/to do",(req,res)=>{
// 	res.send("todo");
// });


//borrar

//cambiar

// //agregar marcas a través de un formulario
// router.post("/marca", controller.mostrarMarca);

// //mostrar todas las marcas
// router.get("/marcas",controller.muestraMarcas);

// //mostrar una marca
// router.get("/marca/:nombreMarca", controller.mostrarMarca);



// //mostrar todas las camaras 
// router.get("/camaras", controller.index);

// //mostrar una camara
// router.get("/camara/:idCamara", controller.show);


module.exports = router;
