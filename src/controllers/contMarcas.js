const servMarcas = require('../services/servMarcas');

//AGREGAR marcas a través de un formulario
const addOne = async(req, res)=>{
    const result = await servMarcas.addOne(req.body);
    res.send(result);
}

//MOSTRAR UNA marca solicitada en los parametros de la url
const showOne = async (req,res)=>{
    const marca = await servMarcas.showOne(req.params);
    res.send(marca);
};

//MOSTRAR TODAS las marcas
const showAll = async (req, res)=>{
    const result = await servMarcas.showAll();
    res.send(result);
};

//BUSCAR una marca por nombreMarca
const searchMarca = async (req,res)=>{
    const result = await servMarcas.searchMarca(req.body);
    res.send(result);
};
//BORRAR UNA marca
//MODIFICAR UNA marca

module.exports = {
    showAll,
    showOne,
    addOne,
    searchMarca
}