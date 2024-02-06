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
            const formattedText = _formatStoryText(fileContent);
            return resolve(formattedText)
        }catch(e){
            return reject("Something went wrong: ", e)
        }
    });
};

const _formatStoryText = (text) => {
    text = text.replace(/[\r\n]{2,}/g, "\n\n");
    const paragraphs = text.split("\n\n");
    const formattedText = [];

    for(let i=0;i<paragraphs.length;i++){
        formattedText.push(paragraphs[i].split(" ")); 
    }

    return JSON.stringify(formattedText);
};

exports.getStoryMD = getStoryMD;
exports.getStoryById = getStoryById;