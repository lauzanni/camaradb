const { conn }= require ("../config/conn");

//MOSTRAR UNA marca
async function showOne(params){
    const { nombreMarca } = params;
    try{
        // const [rows] = await conn.query("SELECT * FROM marcas WHERE ?",{ nombreMarca });
        const [rows] = await conn.query("SELECT * FROM `marcas` WHERE `nombreMarca` LIKE ? ", [`%${nombreMarca}%`] );
        return rows;
    }catch(error){
        throw error;
    }finally{
        conn.releaseConnection();
    }
};

//MOSTRAR TODAS las marcas
async function showAll(){
    try{
        const [rows] = await conn.query("SELECT * FROM `marcas`");
        return rows;
    }catch(error){
        throw error;
    }finally{
        conn.releaseConnection();
    }
};

//AÑADIR UNA marca a través de un formulario
async function addOne (body){
    
    const {idMarca, nombreMarca, paisMarca} = body;
    try{
        const [rows] = await conn.query("INSERT IGNORE INTO marcas SET ?",{
            idMarca, 
			nombreMarca,paisMarca
        });
        return rows;
    }catch(error){
        throw error;
    }finally{
        conn.releaseConnection();
    }

};

//BORRAR UNA marca
//MODIFICAR UNA marca

module.exports = {
    showOne, 
    showAll,
    addOne
}