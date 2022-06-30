import React, { useState, useRef } from 'react'

type Props = {}

const TodoItem = (props: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const inputRef = useRef()

  const editMode = () => {
    setEdit(false)
  }

  return (
    <div className='px-4 py-3 flex items-center gap-5 border-2 border-zinc-400'>
      {edit 
        ? <input type="text" className='outline-none p-2 focus:ring-1 focus:ring-blue-400 w-full' defaultValue="This is a simple text" ref={inputRef} />
        : <p className='text-xl font-semibold'>This is a simple text</p>
      }
      {edit 
        ? <button
            onClick={editMode}
            className='px-3 py-2 ml-auto bg-green-500 text-white rounded-md'>
              Save
          </button>

      : <button
          onClick={() => setEdit(true)}
          className='px-3 py-2 ml-auto bg-zinc-700 text-white rounded-md'>
          Edit
        </button>
      }
    </div>
  )
}

export default TodoItem