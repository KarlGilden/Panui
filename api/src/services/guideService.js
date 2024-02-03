const fs = require('fs');
const path = require('path')

const getGuideById = (id) => {
    return new Promise((resolve, reject)=>{
        const filePath = path.join(__dirname, '../../data/guides/guideMdMap.json')
        try{
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const grammarGuide = JSON.parse(fileContent)[id +""];

            if(!grammarGuide){
                throw ({
                    status: 404,
                    msg:"Grammar guide not found"
                });
            }

            return resolve(grammarGuide);

        }catch(e){
            return reject(e)
        }
    });
};

const getGuideMD = (filename) => {
    return new Promise(async (resolve, reject)=>{

        const filePath = path.join(__dirname, '../../data/guides/markdown/', filename)

        try{
            const fileContent = fs.readFileSync(filePath, 'utf8')
            return resolve(fileContent)
        }catch(e){
            return reject("Something went wrong: ", e)
        }
    });
};

exports.getGuideMD = getGuideMD;
exports.getGuideById = getGuideById;