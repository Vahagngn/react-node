const { Schema, model } = require('mongoose')

const favorites = new Schema({
    /* _id: { type: String},*/
    title: { type: String, required: true },
    address: { type: String },
    description: { type: String }
})

module.exports = model('Favorites', favorites)