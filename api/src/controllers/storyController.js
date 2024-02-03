const express = require('express')
const { getStoryMD, getStoryById } = require('../services/storyService')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send("stories");
})

router.get('/:id', async (req, res) => {
  const story = await getStoryById(req.params.id).catch((e)=>{
    res.status(e.status || 500).send(e.msg || "Something went wrong");
  });
  res.send(story);
})

router.get('/md/:filename', async (req, res) => {
  const storyMD = await getStoryMD(req.params.filename).catch((e)=>{
    res.status(e.status || 500).send(e.msg || "Something went wrong");
  });
  res.send(storyMD);
})

module.exports = router