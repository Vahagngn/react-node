const { Router } = require("express")
const User = require('../models/User')
const router = Router()
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')


router.get('/users/list', async (req, res) => {
    const users = await User.find({}).lean()
        res.send(users.reverse());
})

router.delete('/delete/user/:id', async (req,res) => {
    const users = await User.find({}).lean().deleteOne({ _id: req.params.id })
    return res.json({ users });
})

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Error email text').isEmail(),
        check('name', 'Minimum name length 6 characters')
           .isLength({ min: 3 }),
        check('last_name', 'Minimum name length 6 characters')
        .isLength({ min: 3 }),
        check('password', 'Minimum password length 6 characters')
           .isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect registration data'
            })
        }

        const {email, password, name, last_name} = req.body

        const candidate = await User.findOne({ email })
        if(candidate) {
            return res.status(400).json({ message: 'User exists' })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, name, last_name, password: hashedPassword })

        await user.save()
        res.status(201).json({ message: 'User Created' })

    }catch (e){
        res.status(500).json({ message: 'Error'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'login Email error').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect login data'
            })
         }

         const {email, password} = req.body
         const user = await User.findOne({ email })

         if(!user) {
             return res.status(400).json({ message: 'User is not found' })
         }

         const isMatch = await bcrypt.compare(password, user.password)

         if(!isMatch) {
             return res.status(400).json({ message: 'Wrong password' })
         }

         const token = jwt.sign(
             { userId: user.id },
             config.get('jwtSecret'),
             {expiresIn: '1h'}
         )

         res.json({ token, userId: user.id, name: user.name, last_name: user.last_name})

    }catch (e){
        res.status(500).json({ message: 'Error'})
    }
})

module.exports = router