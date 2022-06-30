import React from 'react'

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

const Layout = ({ children }: Props) => {
  return (
    <div className='max-w-xl mx-auto px-5'>
        {children}
    </div>
  )
}

export default Layout