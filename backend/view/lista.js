const listaController = require("../controller/lista")

module.exports = (app) => {

    
    app.get("/listbusqueda", async (req,res) =>{
        const list = await listaController.list()
        res.send(list)
    })
}
