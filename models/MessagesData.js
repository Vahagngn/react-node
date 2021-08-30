const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true  },
    last_name: {type: String, required: true },
    message: { type: String, required: true },
    global: { type: Boolean },
    private: { type: Boolean },
})

module.exports = model('Messages', schema)