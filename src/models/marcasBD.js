const { conn } = require("../config/conn");

//MOSTRAR UNA marca
async function showOne(params) {
	const { nombreMarca } = params;
	try {
		// const [rows] = await conn.query("SELECT * FROM marcas WHERE ?",{ nombreMarca });
		const [rows] = await conn.query(
			"SELECT * FROM `marcas` WHERE `nombreMarca` LIKE ? ",
			[`%${nombreMarca}%`]
		);
		return rows;
	} catch (error) {
		throw error;
	} finally {
		conn.releaseConnection();
	}
}

//BUSCAR UNA Marca
async function searchMarca(body) {
	const { nombreMarca, paisMarca } = body;
	let filter1 = "";
	let	filter2 = "";
	try {
		if (nombreMarca == "" && paisMarca != "") {
			filter2 = paisMarca;
		} else if (nombreMarca != "" && paisMarca == "") {
			filter1 = nombreMarca;
		} else if (nombreMarca != "" && paisMarca != "") {
			filter1 = nombreMarca;
			filter2 = paisMarca;
		}

		const [rows] = await conn.query(
			"SELECT * FROM `marcas` WHERE `nombreMarca` LIKE ? AND `paisMarca` LIKE ? ",
			[`%${filter1}%`, `%${filter2}%`]
		);
		// console.log(await conn.query("SELECT * FROM `marcas` WHERE `nombreMarca` LIKE ? ", [`%${nombreMarca}%`] ));
		return rows;
	} catch (error) {
		throw error;
	} finally {
		conn.releaseConnection();
	}
}

//MOSTRAR TODAS las marcas
async function showAll() {
	try {
		const [rows] = await conn.query("SELECT * FROM `marcas`");
		return rows;
	} catch (error) {
		throw error;
	} finally {
		conn.releaseConnection();
	}
}

//AÑADIR UNA marca a través de un formulario
async function addOne(body) {
	const { idMarca, nombreMarca, paisMarca } = body;
	try {
		const [rows] = await conn.query("INSERT IGNORE INTO marcas SET ?", {
			idMarca,
			nombreMarca,
			paisMarca,
		});
		return rows;
	} catch (error) {
		throw error;
	} finally {
		conn.releaseConnection();
	}
}

//BORRAR UNA marca
async function delMarca(body) {
	const { nombreMarca } = body;
	console.log(nombreMarca);
	try {
		const [rows] = await conn.query(
			"DELETE FROM `marcas` WHERE `nombreMarca` LIKE ? ",
			[`%${nombreMarca}%`]
		);
		console.log(rows);
		return rows;
	} catch (error) {
		throw error;
	} finally {
		conn.releaseConnection();
	}
}
//MODIFICAR UNA marca

module.exports = {
	showOne,
	showAll,
	addOne,
	searchMarca,
	delMarca,
};
