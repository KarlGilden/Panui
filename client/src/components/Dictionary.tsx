interface IProps {
    phrase:string
    show:boolean
    mouse: {x:number, y:number}
}

const Dictionary = ({phrase, mouse, show}:IProps) => {
  const width = 250;
  return (
    <div style={{position:"absolute", top: mouse.y+"px", left: (mouse.x - (width /2))+"px"}} className={`${show ? "" : "hidden"} w-[${width}px] min-h-[100px] bg-black rounded-md my-5 p-5`}>
        {phrase}
    </div>
  )
}

export default Dictionary