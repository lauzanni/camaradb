const express = require("express");
const router = express.Router();

const controller = require("../controllers/consultaController");

router.get("/",(req,res)=>{
	res.send("hola");
});

router.use('/marcas', require("./routesMarcas"));

router.use('/camaras', require("./routesCamaras"));
 
   
module.exports = router;
