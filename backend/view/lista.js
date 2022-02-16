const listaController = require("../controller/lista")

module.exports = (app) => {

    
    app.get("/listbusqueda", async (req,res) =>{
        const list = await listaController.list()
        console.log(list)
        res.send(list)
    })
}
