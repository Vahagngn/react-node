const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true},
    linksL: [{ type: Types.ObjectId, ref: 'Link' }]
})

module.exports = model('User', schema)