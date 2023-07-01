const model = require("../models/marcasBD");

//MUESTRA UNA marca
const showOne = async (params)=>{
   const rows = await model.showOne(params);//array
   console.log(rows);
   if( rows.length > 0 ){
      // return rows[0];//muestra un objeto
      return rows;
   }
   return "No Existe Esa Marca."
};

//AÑADE UNA marca
const addOne = async (body) =>{
   const result = await model.addOne(body);
    
   if(result.affectedRows > 0){
      return "Nueva Marca Agregada.";
   }
   return result;
};

//MOSTRAR TODAS las marcas
const showAll = async ()=>{
   return model.showAll();
};

//BORRAR UNA marca
//MODIFICAR UNA marca

module.exports = {
   showAll,
   showOne,
   addOne
};