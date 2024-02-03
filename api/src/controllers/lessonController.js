const express = require('express')
const { getAllLessons, getLessonById } = require('../services/lessonService')
const router = express.Router()

router.get('/', async (req, res) => {
    const lessons = await getAllLessons().catch((e)=>{
        res.status(e.status || 500).send(e.msg || "Something went wrong");
    });

    res.send(lessons);
})

router.get('/:id', async (req, res) => {
    const lesson = await getLessonById(req.params.id).catch((e)=>{
        res.status(e.status || 500).send(e.msg || "Something went wrong");
    });

    res.send(lesson);
})

module.exports = router;