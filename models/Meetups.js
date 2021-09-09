const { Schema, model, Types } = require('mongoose')

const meetups = new Schema({
    title: { type: String, required: true },
    address: { type: String },
    description: { type: String },
    meetupsId: {type: String },
    isFavorite: { type: Boolean }
})

module.exports = model('Meetups', meetups)