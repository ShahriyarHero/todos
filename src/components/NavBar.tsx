import React from 'react'

const NavBar = () => {
  return (
    <div className='py-5'>
        <div className="container mx-auto flex justify-between px-5">
            <span className='uppercase font-bold text-2xl'>Todos</span>
            <div className='flex items-center gap-5'>
                <span>Completed Tasks</span>
                <span>To-Do</span>
                <span>Calender</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar