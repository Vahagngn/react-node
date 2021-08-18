const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true },
    user_name: { type: String },
    user_age: { type: Number },
    completed: { type: Boolean, default: false },
    speciality: { type: String }
})

module.exports = model('Todo', schema)