const sql = require("../db/conexion")

module.exports.regis = async (regis)=>{
    let response = await sql.query(`INSERT INTO usuarios (email, pass, name, country, phone, account) VALUES ('${regis.email}',MD5('${regis.pass}'),'${regis.name}','${regis.country}','${regis.phone}','${regis.account}')`)
    return response[0]
}