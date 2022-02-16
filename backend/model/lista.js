const sql = require("../db/conexion")

module.exports.list = async () => {
    let result = await sql.query('SELECT * FROM busquedas')
    return result[0]
}
