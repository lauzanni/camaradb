require("dotenv").config();
const express = require("express");
const methodOverride = require('method-override');

const app = express();

//override para habilitar los metodos PUT y DELETE a través de formulario html
app.use(methodOverride('_method'));

// Convertimos los datos entrantes en formato 
// 		application/x-www-form-urlencoded 
// 		application/json
// a un formato entendible por el servidor
 
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//routes: middelware que trae el archivo de las rutas
app.use('/', require("./src/routes/mainRoutes"));

//error 404
app.use((req,res, next)=>{
	res.status(404).send("Pagina no encontrada");
});

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));
