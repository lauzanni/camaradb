require("dotenv").config();
const express = require("express");
const methodOverride = require('method-override');

const app = express();

//override para habilitar los metodos PUT y DELETE a través de formulario html
app.use(methodOverride('_method'));

//middelware que trae el archivo de las rutas
// app.use(require("./src/routes/mainRoutes.js"));
app.use(express.urlencoded({ extended:false}));

//routes
app.use('/', require("./src/routes/mainRoutes"));

//error 404
app.use((req,res, next)=>{
	res.status(404).send("Pagina no encontrada");
});

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`));
