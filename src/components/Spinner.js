import React from 'react'
import SpinnerIcon from './SpinnerIcon'

const Spinner = () => {
    return (
        <div role="status" className='flex justify-center py-20' >
            <SpinnerIcon className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-success"/>
            <span className="sr-only">Loading...</span>
        </div >
    )
}

export default Spinner