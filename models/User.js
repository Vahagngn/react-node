const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    linksL: [{ type: Types.ObjectId, ref: 'Link' }],
    isOnline: {type: Boolean, required: true}
})

module.exports = model('User', schema)