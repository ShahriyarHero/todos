import React from 'react'

type Props = {}

const AddForm = (props: Props) => {
  return (
    <div className='mt-10'>
        <form>
            <input
                className='
                    px-4 py-3 border-2 border-zinc-300 w-full 
                    outline-none focus:ring-2 focus:ring-blue-400
                ' 
                type='text' 
                placeholder='Write your todo here...' 
            />
        </form>
    </div>
  )
}

export default AddForm