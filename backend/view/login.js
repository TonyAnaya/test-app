const loginController = require("../controller/login")

module.exports = (app) => {
    app.post("/login", async (req,res) =>{
        let result = await loginController.loginUser(req.body)
        res.send(result)
    })
}