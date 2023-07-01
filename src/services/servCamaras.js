const model = require('../models/camarasBD');

//MUESTRA UNA Camara
const showOne = async (params) => {
   const rows = await model.showOne(params);//array
      if( rows.length > 0 ){
      // return rows[0];//muestra un objeto
      return rows;
      
   }
   return "No Existe Esa Camara."
};
//BUSCAR UNA Camara
const searchCam = async (body) => {
   console.log("llego aquí");

   const rows = await model.searchCam(body);//array
   console.log(rows);
   if( rows.length > 0 ){
      console.log(rows.length);
      // return rows[0];//muestra un objeto
      return rows;
   }
   return "No Existe Esa Camara."
};
//AGREGAR UNA Camara
const addOne = async (body) =>{
   const result = await model.addOne(body);
   if(result.affectedRows > 0){
      return "Nueva Camara Agregada.";
   }
   return result;
};

//MOSTRAR TODAS las Camaras
const showAll = async () =>{
   return model.showAll();
};

//BORRAR UNA Camara
//MODIFICAR UNA Camara

module.exports = {
   showAll,
   showOne,
   addOne,
   searchCam
}; 
   