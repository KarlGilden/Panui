const fs = require('fs');
const path = require('path')

const getDictionaryEntry = (phrase) => {
    return new Promise((resolve, reject)=>{
        const filePath = path.join(__dirname, '../../data/dictionary/dictionary.json');
        let dictionaryEntry = "";
        try{
            let fileContent = fs.readFileSync(filePath, 'utf8');
            fileContent = JSON.parse(fileContent);

            for(let i=0;i<fileContent.length;i++){
                if(fileContent[i].original === phrase){
                    dictionaryEntry = fileContent[i];
                    break;
                }
            }

            if(!dictionaryEntry){
                throw ({
                    status: 400,
                    msg: "Entry not found"
                });
            }

            return resolve(dictionaryEntry);

        }catch(e){
            return reject(e);
        }
    });
};

exports.getDictionaryEntry = getDictionaryEntry;
