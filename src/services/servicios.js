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
 
module.exports = {
    mostrarDatos,
    muestraCamara,
    //agregadoMarca,
    //muestraMarcas,
    // mostrarMarca
};