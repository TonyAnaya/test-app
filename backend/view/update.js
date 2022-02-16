const updateController = require("../controller/update")

module.exports = (app) => {
    app.post("/update",async (req,res) =>{
        const result = await updateController.update(req.body.updt)

        res.send({result})
    })

}