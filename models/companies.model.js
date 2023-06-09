const {Schema, model} = require('mongoose')

let scheme = new Schema({
    name: {
        type: String,
        required: true
    },
    inn: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = model('companies', scheme)