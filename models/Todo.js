const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true },
    user_name: { type: String },
    user_age: { type: Number },
    speciality: { type: String },
    completed: { type: Boolean, default: false }
})

module.exports = model('Todo', schema)