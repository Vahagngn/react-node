const { Router } = require('express')
const router = Router()
const Favorites = require('../models/Favorites')


router.get('/favorites', async (req, res) => {
    const favorites = await Favorites.find({}).lean()
        res.send(favorites.reverse());
})

router.post('/favorite/create', async (req, res) => {
    const favoriteCreate = new Favorites({
        title: req.body.title,
        address: req.body.address,
        description: req.body.description
    })

    await favoriteCreate.save()
})

router.delete('/favorite/delete/:id', async (req,res) => {
    const favoritesDelete = await Favorites.find({}).lean().deleteOne({ _id: req.params.id })
    return res.json({ favoritesDelete });
})

router.delete('/meetup/delete/:id', async (req,res) => {
    const meetupDelete = await Favorites.find({}).lean().deleteOne({ _id: req.params.id })
    return res.json({ meetupDelete });
})

module.exports = router