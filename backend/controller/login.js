const loginModel = require("../model/login")
const jwt = require('jsonwebtoken')

module.exports.loginUser = async (loginData) =>{
    let response = await loginModel.login(loginData)
    if (response.login) {
      return {token: await jwt.sign(response.data,"Alojomora")}
    }
    return {error:"Usuaria(o) o contraseña incorrectos"}
}

