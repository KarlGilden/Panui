const express = require('express')
const cors = require('cors')
const lessonController = require('./src/controllers/lessonController')
const guideController = require('./src/controllers/guideController')
const storyController = require('./src/controllers/storyController')
const port = process.env.PORT || "3000";

const server = express();

server.use(cors())

server.use("/lesson", lessonController);
server.use("/guide", guideController);
server.use("/story", storyController);


server.listen(port, ()=>{
    console.log("Listening on port ", port)
});