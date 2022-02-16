const express = require("express")
const cors = require("cors")
require("dotenv").config()
const sql = require("./db/conexion")
const app = express()

//Views
const registro  = require("./view/registro")
const search = require("./view/search")
const login = require("./view/login")
const update = require("./view/update")






//Midlewares
app.use(express.json())
app.use(cors())


async function serverStart() {
    await sql.authenticate();
    app.listen(3001,()=>{
        console.log("Server start on http:localhost:3001")
    })
}

serverStart()
registro(app);
search(app);
login(app);
update(app);