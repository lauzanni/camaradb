const { conn } = require("../config/conn");

//MOSTRAR UNA Camara
async function showOne(params) {
    const { nombreCamara } = params;

    try {
        const [rows] = await conn.query("SELECT * FROM `camaras` WHERE `nombreCamara` LIKE ? ", [`%${nombreCamara}%`]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
};
//BUSCAR UNA Camara
async function searchCam(body) {
    const { nombreCamara, anylanzamiento, precio, idMarca, tipoCamara } = body;

    console.log(nombreCamara, anylanzamiento, precio, idMarca, tipoCamara);

    try {
        // const [rows] = await conn.query("SELECT * FROM `camaras` WHERE `nombreCamara` LIKE ? ", ["%" + nombreCamara +"%"] );
        //   const [rows] = await conn.query("SELECT * FROM `camaras` WHERE `nombreCamara` LIKE ? ",  [`%${nombreCamara}%`,] );
        // console.log("SELECT * FROM `camaras` WHERE nombreCamara, anylanzamiento, precio, idMarca, idTipoCamara LIKE ? OR ? OR ? OR ? OR ? ",  
        // {`%${nombreCamara}%`,`%${anylanzamiento}%`,`%${precio}%`,`%${idMarca}%` } );

        //    const [rows] = await conn.query("SELECT * FROM `camaras` WHERE CONCAT(nombreCamara,precio, idTipoCamara) LIKE ? OR ? OR ?  ",  
        //    [`%${nombreCamara}%`,`%${precio}%`, `%${idTipoCamara}%` ] );
        const [rows] = await conn.query("SELECT * FROM `camaras` WHERE nombreCamara LIKE ? OR tipoCamara LIKE ? OR precio LIKE ? OR anylanzamiento LIKE ?",
            [`%${nombreCamara}%`, `%${tipoCamara}%`, `%${precio}%`, `%${anylanzamiento}%`]);

        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
};

//MOSTRAR TODAS las Camaras
async function showAll() {
    try {
        const [rows] = await conn.query("SELECT * FROM camaras");
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
};

//AÑADIR UNA Camara a través de un formulario
async function addOne(body) {
    const { nombreCamara, anylanzamiento, idMarca, precio } = body;

    try {
        const [rows] = await conn.query("INSERT IGNORE INTO camaras SET ?", {
            nombreCamara,
            anylanzamiento,
            idMarca,
            precio
        });
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }

};

//BORRAR UNA Camara
async function delCamara(body) {
    const { idCamara, nombreCamara, anylanzamiento, idMarca, tipoCamara } = body;
    try {
        const [rows] = await conn.query("DELETE FROM `camaras` WHERE idCamara LIKE ? OR nombreCamara LIKE ? ",
            [`%${idCamara}`, `%${nombreCamara}%`]);

        return rows;

    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
};

//MODIFICAR UNA Camara

async function modificaCamara(body) {
    const { idCamara, nombreCamara, anylanzamiento, idMarca, tipoCamara , precio} = body;

    try {
        const [rows] = await conn.query("UPDATE `camaras` SET ? WHERE `idCamara` LIKE ? ", [{ 
            nombreCamara,
            anylanzamiento,
            precio,
            idMarca,
			tipoCamara            
		},idCamara]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
};

module.exports = {
    showOne,
    showAll,
    addOne,
    searchCam,
    delCamara,
    modificaCamara

}