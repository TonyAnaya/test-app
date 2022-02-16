const listaModel = require("../model/lista")

module.exports.list = async () =>{
    return await listaModel.list()
}