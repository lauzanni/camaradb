const { conn } = require("../config/conn");

//funcion que trae el contenido de la bd

async function mostrarDatos(){
	//const query = "SELECT * FROM camaras";
	try{
		// const [rows] = await conn.query(query, user);
		const [rows] = await conn.query("SELECT * FROM camaras");
		return rows;
	}catch(error){
		
		throw error;
	}finally{
		conn.releaseConnection();
	}
}

async function muestraUnaCamara(params){
	const { idCamara } = params;
	 
	try{
		// const [rows] = await conn.query(query, user);
		const [rows] = await conn.query("SELECT * FROM camaras WHERE ?",{ idCamara });		
		return rows;
		
	}catch(error){
		throw error;
	}finally{
		conn.releaseConnection();
	}
}
// async function mostrarMarca(params){
	
// 	const { nombreMarca } = params;
// console.log(params);
// 	try{
// 		const [rows] = await conn.query("SELECT * FROM marcas WHERE ?",{ nombreMarca });
// 		return rows;

// 	}catch(error){
// 		throw error;
// 	}finally{
// 		conn.releaseConnection();
// 	}
// }


// async function agregadoMarca(body){
// 	const { idMarca,nombreMarca,paisMarca } = body;
// 	console.log(body); 
// 	try{
// 		// const [rows] = await conn.query(query, user);
// 		const [rows] = await conn.query("INSERT IGNORE INTO marcas SET ?", {
// 			idMarca, 
// 			nombreMarca,paisMarca
// 		});
		
// 		return rows;
// 	}catch(error){
// 		if (error.code === "ER_DUP_ENTRY") {
// 			return "Registro duplicado.";
// 	   } 
// 		throw error;
// 	}finally{
// 		conn.releaseConnection();
// 	}
// }
// async function muestraMarcas(){
// 	try{
// 		const [rows] = await conn.query("SELECT * FROM marcas");
// 		return rows;
// 	}catch(error){
// 		throw error;
// 	}finally{
// 		conn.releaseConnection();
// 	}
// }

module.exports = {
	mostrarDatos, 
	muestraUnaCamara, 
	agregadoMarca,
	muestraMarcas,
	mostrarMarca
}
