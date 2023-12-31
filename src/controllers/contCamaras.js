const servCamaras = require('../services/servCamaras');

//AGREGAR camaras a través de un formulario
const addOne = async(req, res)=>{
    const result = await servCamaras.addOne(req.body);
    res.send(result);
}

//MOSTRAR UNA camara solicitada en los parametros de la url
const showOne = async (req,res)=>{
    const camara = await servCamaras.showOne(req.params);
    res.send(camara);
};

//MOSTRAR TODAS las camaras
const showAll = async (req, res)=>{
    const result = await servCamaras.showAll();
    res.send(result);
};

//BUSCAR una cámara por nombreCamara
const searchCam = async (req,res)=>{
    const result = await servCamaras.searchCam(req.body);
    res.send(result);
};

//BORRAR UNA camara
const delCamara = async (req, res)=>{
    const result = await servCamaras.delCamara(req.body);
    res.send(result);
};

//MODIFICAR UNA camara
const modificaCamara = async (req, res)=>{
    const result = await servCamaras.modificaCamara(req.body);
    res.send(result);
};

module.exports = {
    showAll,
    showOne,
    addOne,
    searchCam,
    delCamara,
    modificaCamara
}