const express = require('express')
const { getAllLessons } = require('../services/lessonService')
const router = express.Router()

router.get('/', async (req, res) => {
    const lessons = await getAllLessons().catch((e)=>{
        res.status(e.status || 500).send(e.msg || "Something went wrong");
    });

    res.send(lessons);
})

module.exports = router;