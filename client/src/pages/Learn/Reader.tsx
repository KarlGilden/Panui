import React from 'react'
import ReactMarkdown from 'react-markdown'

interface IProps {
    story: string
}

const Reader = ({story}:IProps) => {
  return (
    <ReactMarkdown>
        {story}
    </ReactMarkdown>
  )
}

export default Reader