import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const [lessons, setLessons] = useState<{id:"", title:"", guideId: "", storyId: ""}[]>([]);

    useEffect(()=>{
        getLessons();
    },[])

    const getLessons = async () => {
        await fetch("http://localhost:3000/lesson", {

        })
        .then(res=>res.json())
        .then(data=>{
            setLessons(data);
            console.log(lessons)
        });
    }   

  return (
    <div>
        <h1>Lessons</h1>
        <div>
            {lessons.map((value, index)=>{
                return(
                    <div onClick={()=>{navigate(`/learn/${value.id}`)}} key={index}>
                        {value.title}
                    </div>
                );
            })}
        </div>
    </div>

  )
}

export default Dashboard