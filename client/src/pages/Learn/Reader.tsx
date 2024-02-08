import { Fragment, useState } from 'react';
import { removeHighlight, selectAndGetText } from '../../util/Selection';
import Dictionary from '../../components/Dictionary';

interface IProps {
    story: string[][]
}

const Reader = ({story}:IProps) => {

  let paragraphIndex = 0;
  let wordIndex = 0;

  const [phrase, setPhrase] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDictionary, setShowDictionary] = useState(false);

  const handleSelect = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        console.log(e)
      removeHighlight();
      
      const phrase = selectAndGetText();

      setMousePosition({x: e.clientX, y:e.clientY})
      console.log({x: e.clientX, y:e.clientY})
      if(phrase){
          define(phrase.replace("\n", ""))
      }
  };

  const define = (phrase:string) => {
    // setCurrentTranslations({original: phrase, translations:[""]});
    // setCurrentPhrase({original: phrase, translations:[""]});

    // await translate(phrase, phraseList).then((translation)=>{
    //     if(!translation) return;
    //     setCurrentTranslations(translation);
    //     setCurrentPhrase({original:phrase, translations:[translation.translations[0]]});
    // })
    setPhrase(phrase);
    setShowDictionary(true);
  };
  
  const clickPhrase = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const wrapper = document.getElementById("selected-text");
    if(!e.target) return;
    if(wrapper){
        if (!wrapper.contains(e.target as HTMLElement) && wrapper != e.target) {
            wrapper.replaceWith(...wrapper.childNodes)
            setShowDictionary(false)
        }
    }
  }

  return (
    <>
        <div onClick={(e)=>clickPhrase(e)} className='max-w-[600px] reader-wrapper select-text'>
        {story.map((paragraph)=>{
            paragraphIndex++;
            return (
                <Fragment key={"f1"+paragraph}>
                <div className='paragraph select-text' key={`p${paragraphIndex}`} onMouseUp={(e)=>handleSelect(e)} id={`p${paragraphIndex}`}>
                    {paragraph.map((word, index)=>{
                        wordIndex++;
                        return (
                            <Fragment key={"f2"+index}><span className='flex inline-flex items-center' key={`w${wordIndex}`} id={`w${wordIndex}`}>{word}</span> </Fragment>
                        )
                    })}
                </div>
                <br />
                </Fragment>
                )
            })}
        </div>
        <Dictionary show={showDictionary} phrase={phrase} mouse={mousePosition}/>
    </>

  )
}

export default Reader