const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1] // "TOKEN"

        if(!token){
            return res.status(401).json({ message: 'Not authorization' })
        }

        const decoded = jwt.verify(token, process.env.JWTSECRET)
        req.user = decoded
        next()

    }catch (e) {
        res.status(401).json({ message: 'Not authorization' })
    }
}