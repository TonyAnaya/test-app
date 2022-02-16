const updateModel = require("../model/update")

module.exports.update = async (update) =>{
    return await updateModel.update(update)
}