export const getLesson = (id:string) => {
    return new Promise<any>(async (resolve, reject)=>{
        await fetch(`http://localhost:3000/lesson/${id}`)
        .then(res=>res.json())
        .then(lesson=>{
            resolve(lesson);
        })
        .catch((e)=>{
            reject(e);
        });
    });
};

export const getGuide = (id:string) => {
    return new Promise<string>(async (resolve, reject)=>{
        await fetch(`http://localhost:3000/guide/${id}`)
        .then(res=>res.json())
        .then(guide=>{
            console.log(guide)
            fetch(`http://localhost:3000/guide/md/${guide.fileName}`)
            .then(res=>res.text())
            .then(guideMd=>{
                resolve(guideMd);
            })
        })
        .catch((e)=>{
            reject(e);
        });
    });
};

export const getStory = (id:string) => {
    return new Promise<string[][]>(async (resolve, reject)=>{
        await fetch(`http://localhost:3000/story/${id}`)
        .then(res=>res.json())
        .then(story=>{
            console.log(story)
            fetch(`http://localhost:3000/story/md/${story.fileName}`)
            .then(res=>res.json())
            .then(storyMd=>{
                resolve(storyMd);
            })
        })
        .catch((e)=>{
            reject(e);
        });
    });
};