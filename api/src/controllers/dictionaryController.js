const express = require('express')
const { getDictionaryEntry } = require('../services/dictionaryService')
const router = express.Router()

router.get('/', async (req, res) => {
  res.send("dictionary");
});

router.get('/:phrase', async (req, res) => {
  const dictionaryEntry = await getDictionaryEntry(req.params.phrase).catch((e)=>{
    res.status(e.status || 500).send(e.msg || "Something went wrong");
  });
  res.send(dictionaryEntry);
});

module.exports = router