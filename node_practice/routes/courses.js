const {Router} = require('express')
const Course = require('../models/course')
const router = Router()


router.get('/', async (req,res)=>{
    const courses = await Course.getAll()
    res.render('courses', {
        title: 'Курсы',
        isCourses: true,
        courses
    })
})

router.get('/:id/edit', async (req, res) => {
    if (!req.query.allow){
        return res.redirect('/')
    }

    const course = await Course.getById(req.params.id)
    res.render('course-edit', {
        title: `Редактировать ${course.title}`,
        course
    })
})

router.delete('/remove/:id', async (req, res) => {
    const course = await Course.remove(req.params.id)
    res.status(200).json(course)
})

router.post('/edit', async (req, res) =>{
    await Course.update(req.body)
    res.redirect('/courses')
})

router.get('/:id', async (req, res) => {
    const course = await Course.getById(req.params.id)
    res.render('course', {
        title: `Курс ${course.title}`,
        course
    })
})



module.exports = router