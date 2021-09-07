const { Router } = require('express')
const router = Router()
const Meetups = require('../models/Meetups')


router.get('/meetups', async (req, res) => {
    const meetups = await Meetups.find({}).lean()
        res.send(meetups.reverse());
})

router.post('/meetup/create', async (req, res) => {
    const meetupCreate = new Meetups({
        title: req.body.title,
        address: req.body.address,
        description: req.body.description
    })

    await meetupCreate.save()
})

router.delete('/meetup/delete/:id', async (req,res) => {
    const meetupDelete = await Meetups.find({}).lean().deleteOne({ _id: req.params.id })
    return res.json({ meetupDelete });
})

module.exports = router