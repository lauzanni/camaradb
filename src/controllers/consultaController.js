const service = require ("../services/servCamaras");

const showAll = async (req, res)=>{
    // console.log( await service.mostrarDatos());
    // res.send("listado");
    const rows = await service.mostrarDatos();
    res.send(rows);
};

// const show = async (req, res)=>{
//     const fila = await service.muestraCamara(req.params);
//     res.send(fila);
// };

//mostrar una camara solicitada en los parametros de la url
const showOne = async (req,res)=>{
    const camara = await servMarcas.showOne(req.params);
    res.send(camara);
};
//AGREGAR marcas a través de un formulario
const addOne = async(req, res)=>{
    const result = await servMarcas.add(req.body);
    res.send(result);
}
// const agregarMarca = async (req, res)=>{
//     const result = await service.agregadoMarca(req.body);
//     res.send(result);
    
// };
// const muestraMarcas = async (req, res)=>{
//     const result = await service.muestraMarcas(req.params);
//     res.send(result);
// };

// const mostrarMarca = async (req, res)=>{
//     const result = await service.mostrarMarca(req.params);
//     res.send(result);
//};

module.exports = {
    // index,
    // show,
    showAll,
    showOne,
    addOne
    // agregarMarca,
    // muestraMarcas,
    // mostrarMarca
};