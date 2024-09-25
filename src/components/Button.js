import React from 'react'

export const Button = ({name}) => {
  return (
    <div>
        <button className='px-2 py-2 m-2 rounded-lg bg-gray-200'>
            {name}
        </button>
    </div>
  )
}
