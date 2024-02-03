const fs = require('fs');
const path = require('path')

const getStoryById = (id) => {
    return new Promise((resolve, reject)=>{
        const filePath = path.join(__dirname, '../../data/stories/storiesMdMap.json')
        try{
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const story = JSON.parse(fileContent)[id +""];

            if(!story){
                throw ({
                    status: 404,
                    msg:"Story not found"
                });
            }

            return resolve(story);

        }catch(e){
            return reject(e)
        }
    });
};

const getStoryMD = (filename) => {
    return new Promise(async (resolve, reject)=>{

        const filePath = path.join(__dirname, '../../data/stories/markdown/', filename)

        try{
            const fileContent = fs.readFileSync(filePath, 'utf8')
            return resolve(fileContent)
        }catch(e){
            return reject("Something went wrong: ", e)
        }
    });
};

exports.getStoryMD = getStoryMD;
exports.getStoryById = getStoryById;