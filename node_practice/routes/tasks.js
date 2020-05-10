const {Router} = require('express')
const router = Router()


router.get('/', (req,res)=>{
    res.render('tasks', {
        title: 'Задачи',
        isTask: true
    })
})


module.exports = router