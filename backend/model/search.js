const sql = require("../db/conexion")

module.exports.search = async (search)=>{
    let response = await sql.query(`SELECT id,name,email,register_date,last_search,num_of_searches,account,phone,country FROM usuarios WHERE email LIKE '${search}'`)
    return response[0][0]
}