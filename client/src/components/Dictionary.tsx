import { DictionaryEntry } from "../types/TranslationTypes";

interface IProps {
    phrase:DictionaryEntry
    translations: string[]
    show:boolean
    mouse: {x:number, y:number}
}

const Dictionary = ({phrase, translations, mouse, show}:IProps) => {
  const width = 250;
  return (
    <div style={{position:"absolute", top: mouse.y+"px", left: (mouse.x - (width /2))+"px"}} className={`${show ? "" : "hidden"} w-[${width}px] min-h-[100px] bg-black rounded-md my-5 p-5`}>
        <p className="font-bold">{phrase.original}</p>
        {translations.map((value, index)=>{
          return <p key={index}>{value}</p>
        })}
    </div>
  )
}

export default Dictionary