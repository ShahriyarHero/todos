import React from 'react'
import NavBar from './NavBar'

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

const Page = ({ children }: Props) => {
  return (
    <div>
        <NavBar />
        {children}
    </div>
  )
}

export default Page