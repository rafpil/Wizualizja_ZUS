import React from 'react'

const Card = ({title, content}) => {
  return (
    <div className='w-full p-2'>
        <div className='text-[#667489] font-bold'> {title} </div>
        <div className='animate-colorchange bg-[#2c384c] border-2 border-[#263042] rounded-xl min-h-[3rem] flex items-center p-2'> {content} </div>
    </div>
  )
}

export default Card