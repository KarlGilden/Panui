import { ReactNode } from "react"

interface IProps{
    children: ReactNode
}

const Page = ({children}:IProps) => {
  return (
    <div className='min-h-screen pt-navbar'>
        {children}
    </div>
  )
}

export default Page