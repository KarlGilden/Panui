import React from 'react'
import ReactMarkdown from 'react-markdown'

interface IProps {
    guide: string
    changeTab: (tab:"guide"|"story"|"list")=>void
}

const Guide = ({guide, changeTab}:IProps) => {
  return (
    <>
    <ReactMarkdown>
        {guide}
    </ReactMarkdown>
    <div className='flex justify-end'>
        <button onClick={()=>changeTab("story")} className='p-1 border-b-white border-b-2'>To the story</button>
    </div>
    </>

  )
}

export default Guide