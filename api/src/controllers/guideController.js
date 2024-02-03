const express = require('express')
const { getGuideMD, getGuideById } = require('../services/guideService')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send("guides");
})

router.get('/:id', async (req, res) => {
  const guide = await getGuideById(req.params.id).catch((e)=>{
    res.status(e.status || 500).send(e.msg || "Something went wrong");
  });
  res.send(guide);
})

router.get('/md/:filename', async (req, res) => {
  const guideMD = await getGuideMD(req.params.filename).catch((e)=>{
    res.status(e.status || 500).send(e.msg || "Something went wrong");
  });
  res.send(guideMD);
})

module.exports = router