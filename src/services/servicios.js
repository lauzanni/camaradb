const model = require('../models/consultasBD');

const mostrarDatos = async ()=>{
    return model.mostrarDatos();
};
const muestraCamara = async (params)=>{
    const rows = await model.muestraUnaCamara(params); //array
    if(rows.length > 0){
        return rows[0];//muestra un objeto
    }
    return "No existe esa cámara."
};

// const muestraMarcas = async ()=>{
//     return model.muestraMarcas();
// };
// const agregadoMarca = async (body)=>{
//     const result = await model.agregadoMarca(body);
//     if(result.affectedRows > 0){
//         return "Nueva Marca agregada";
//     }
//     return result;
// };

// const mostrarMarca = async (params)=>{
  
//     const rows = await model.mostrarMarca(params); //array
     
//     if(rows.length > 0){       
//         return rows[0];//muestra un objeto
//     }
//     return "No existe esa empresa."
// };
module.exports = {
    mostrarDatos,
    muestraCamara,
    //agregadoMarca,
    //muestraMarcas,
    // mostrarMarca
};