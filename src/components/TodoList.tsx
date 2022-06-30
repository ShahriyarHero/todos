import React from 'react'
import Children from '../types/Children'
import TodoItem from './TodoItem'

type Props = {
    children?: Children
}

const TodoList = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 mt-10'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
  )
}

export default TodoList