const User = require('../models/User')

exports.sendOnlineUsers = async function(req, res) {

    const users = await User.find({  }).lean()
    res.send(users.reverse());
    // User.find({isOnline: true}).lean()
    // res.send(users.reverse());
}