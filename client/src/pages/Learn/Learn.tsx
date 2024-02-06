import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getGuide, getLesson, getStory } from '../../util/data/utilLesson';
import Guide from './Guide';
import Reader from './Reader';
import Page from '../../components/layout/Page';

const Learn = () => {

    let {id} = useParams();

    const [guide, setGuide] = useState("");
    const [story, setStory] = useState<string[][]>([[""]]);

    const [tab, setTab] = useState<"guide"|"story"|"list">("guide")
    
    useEffect(()=>{
      getData();
    }, []);

    const getData = async () => {
      if(!id) return;

      await getLesson(id)
      .then(lesson=>{
        getGuide(lesson.guideId).then((guide)=>{
          setGuide(guide);
        });
        getStory(lesson.storyId).then((story)=>{
          setStory(story);
        });
      });
    }

    const changeTab = (tab:"guide"|"story"|"list") => {
      setTab(tab);
    }

  return (
    <Page>
      <div className='flex flex-col items-center'>
        <div className='max-w-[600px] w-full'>
          <button className={`${tab === "guide" && "border-b-white border-b-2"} p-2`} onClick={()=>changeTab("guide")}>Grammar guide</button>
          <button className={`${tab === "story" && "border-b-white border-b-2"} p-2`} onClick={()=>changeTab("story")}>Story</button>
        </div>
        <div className='max-w-[600px] w-full min-h-[200px]  py-5'>
          {tab === "guide" && <Guide guide={guide} changeTab={changeTab}/>}
          {tab === "story" && <Reader story={story}/>}
        </div>
      </div>
    </Page>

  )
}

export default Learn