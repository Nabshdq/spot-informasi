import React from 'react'

const Desc = ({ desc }) => {
    return (
        <div className='bg-white mx-7 p-8 rounded-lg'>
            <p className='text-justify text-base text-orange-600 font-bold'>{desc}</p>
        </div>
    )
}

export default Desc