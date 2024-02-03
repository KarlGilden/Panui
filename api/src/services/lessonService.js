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

exports.getAllLessons = getAllLessons;