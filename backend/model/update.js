const sql = require("../db/conexion")

module.exports.update = async (updat)=>{
    let response = await sql.query(`UPDATE usuarios SET last_search ='${updat.busqueda}', num_of_searches = num_of_searches + 1 WHERE email = '${updat.email}'`)
    let response2 =[[]]
    let response3 = await sql.query(`UPDATE busquedas SET num_searched = num_searched + 1, last_searched = CURRENT_TIMESTAMP WHERE symbol ='${updat.busqueda}'`)

    if (response3[0].changedRows ==0){
        let response2 = await sql.query(`INSERT INTO busquedas(symbol, num_searched, last_searched) VALUES ('${updat.busqueda}',1,CURRENT_TIMESTAMP)`)
    }



    return (response[0][0], response2[0][0], response3[0][0])
}

