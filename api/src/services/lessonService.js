const fs = require('fs');
const path = require('path')

const getAllLessons = () => {
    return new Promise((resolve, reject)=>{
        const filePath = path.join(__dirname, '../../data/lessons/lessons.json')
        try{
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const lessons = JSON.parse(fileContent);

            if(!lessons){
                throw ({
                    status: 400,
                    msg: "Lessons not found"
                });
            }

            return resolve(lessons);

        }catch(e){
            return reject(e);
        }
    });
};

const getLessonById = (id) => {
    return new Promise((resolve, reject)=>{
        const filePath = path.join(__dirname, '../../data/lessons/lessonsMdMap.json');
        try{
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const lesson = JSON.parse(fileContent)[id];

            if(!lesson){
                throw ({
                    status: 400,
                    msg: "Lesson not found"
                });
            }

            return resolve(lesson);

        }catch(e){
            return reject(e);
        }
    });
};

exports.getAllLessons = getAllLessons;
exports.getLessonById = getLessonById;