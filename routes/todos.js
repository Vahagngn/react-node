const { Router } = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.get('/data', async (req, res) => {
    const todos = await Todo.find({}).lean()
    // .exec(function(error, body) {
        res.send(todos);
    // });
    // todos.reverse()

    // res.render('index', {
    //     title: 'Todos list',
    //     isIndex: true,
    //     todos
    // })
})

router.post('/data', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        user_name: req.body.user_name,
        user_age: req.body.user_age,
        speciality: req.body.speciality
    })

    await todo.save()
    res.redirect('/data')
})

router.delete('/delete/:id', async (req,res) => {
    const todos = await Todo.find({}).lean().deleteOne({ _id: req.params.id })
    return res.json({ todos });
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        userTitle: 'Create User',
        userAge: 'User Age',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        user_name: req.body.user_name,
        user_age: req.body.user_age,
        speciality: req.body.speciality
    })

    await todo.save()
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    const todo = await Todo.findById(req.body.id)

    todo.completed = !!req.body.completed
    await todo.save()

    res.redirect('/')
})

// deleteButton.addEventListener('click', function(e) {
//     router.delete('/complete', async (req, res) => {
//         const todo = await Todo.findById(req.body.id)
    
//         todo.completed = !!req.body.completed
//         await todo.save()
    
//         res.redirect('/')
//     })
//   });

//   document.getElementById("deleteButtonId").onclick = function () {
//     router.delete('/complete', async (req, res) => {
//         const todo = await Todo.findById(req.body.id)
    
//         todo.completed = !!req.body.completed
//         await todo.save()
    
//         res.redirect('/')
//     })
// };

module.exports = router