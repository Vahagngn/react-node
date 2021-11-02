const User = require('../models/User')

exports.sendOnlineUsers = async function(req, res) {

    const users = await User.find({ isOnline: true }).lean()
    res.send(users.reverse());
    console.log(users)
    // User.find({isOnline: true}).lean()
    // res.send(users.reverse());
}