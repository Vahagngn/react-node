const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true  },
    last_name: {type: String, required: true },
    message: { type: String, required: true },
})

module.exports = model('Messages', schema)