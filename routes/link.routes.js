 const {Router} = require('express')
 const config = require('config')
 const shortid = require('shortid')
 const Link = require('../models/Link')
 const auth = require('../middleware/auth.middleware')
 const router = Router()
 const dotenv = require('dotenv')
 dotenv.config()

 router.post('/generate', auth, async (req, res) => {
     try {
         const baseUrl = process.env.BASEURL
         const {from} = req.body

         const code = shortid.generate()

         const existing = await Link.findOne({ from })

         if(existing) {
             return res.json({ link: existing })
         }

         const to = baseUrl + '/t/' + code

         const link = new Link({
             code, to, from, owner: req.user.userId
         })

         await link.save()

         res.status(201).json({ link })

     } catch (e) {
         res.status(500).json({ message: 'Error' })
     }
 })

 router.get('/', auth, async (req, res) => {
    try {
        const links = await Link.find({ owner: req.user.userId })
        res.json(links)
    } catch (e) {
        res.status(500).json({ message: 'Error' })
    }
 })

 router.delete('/delete/link/:id', async (req,res) => {
    const links = await Link.find({}).lean().deleteOne({ _id: req.params.id })
    return res.json({ links });
})

 router.get('/:id', auth, async (req, res) => {
    try {
        const links = await Link.findById( req.params.id )
        res.json(links)
    } catch (e) {
        res.status(500).json({ message: 'Error' })
    }
 })

 module.exports = router