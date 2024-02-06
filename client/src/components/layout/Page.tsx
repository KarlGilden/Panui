import { ReactNode } from "react"

interface IProps{
    children: ReactNode
}

const Page = ({children}:IProps) => {
  return (
    <div className='min-h-screen pt-navbar p-5'>
        {children}
    </div>
  )
}

export default Page