import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Home = () => {
    const [md, setMd] = useState("");

    useEffect(()=>{
      getMarkdown();
    }, []);
  
    const getMarkdown = async () => {
      await fetch("http://localhost:3000/guide/md/guide1.md", {
  
      }).then(res=>res.text())
      .then(data=>{
        console.log(data)
        setMd(data);
      })
    }
  return (
    <div>
        <ReactMarkdown>
            {md}
        </ReactMarkdown>
    </div>
  )
}

export default Home