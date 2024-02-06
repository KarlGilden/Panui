import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Page from "../components/layout/Page";

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
    <Page>
        <div className="flex flex-col items-center justify-center">
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
    </Page>
  )
}

export default Dashboard