const { conn } = require ("../config/conn");

//MOSTRAR UNA Camara
async function showOne(params){
    const { nombreCamara } = params;
   
    try{
        const [rows] = await conn.query("SELECT * FROM `camaras` WHERE `nombreCamara` LIKE ? ", [`%${nombreCamara}%`] );
        return rows;
    }catch(error){
        throw error;
    }finally{
        conn.releaseConnection();
    }
};
//BUSCAR UNA Camara
async function searchCam(body){
    const { nombreCamara } = body;
  
    try{
        // const [rows] = await conn.query("SELECT * FROM `camaras` WHERE `nombreCamara` LIKE ? ", ["%" + nombreCamara +"%"] );
        const [rows] = await conn.query("SELECT * FROM `camaras` WHERE `nombreCamara` LIKE ? ", [`%${nombreCamara}%`] );
        return rows;
    }catch(error){
        throw error;
    }finally{
        conn.releaseConnection();
    }
};

//MOSTRAR TODAS las Camaras
async function showAll(){
    try{
        const [rows] = await conn.query("SELECT * FROM camaras");
        return rows;
    }catch(error){
        throw error;
    }finally{
        conn.releaseConnection();
    }
};

//AÑADIR UNA Camara a través de un formulario
async function addOne (body){
    const {nombreCamara,anylanzamiento, idMarca, precio} = body;

    try{
        const [rows] = await conn.query("INSERT IGNORE INTO camaras SET ?",{
			nombreCamara,
            anylanzamiento,
            idMarca,
            precio
        });
        return rows;
    }catch(error){
        throw error;
    }finally{
        conn.releaseConnection();
    }

};

//BORRAR UNA Camara
//MODIFICAR UNA Camara

module.exports = {
    showOne, 
    showAll,
    addOne,
    searchCam

}