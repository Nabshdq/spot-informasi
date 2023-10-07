import React from 'react'

const Desc = ({ desc }) => {
    return (
        <div className='bg-white mx-4 p-5 rounded-lg '>
            <p style={{ lineHeight: '1.8' }} className='text-justify text-base text-orange-600 font-bold'>{desc}</p>
        </div>
    )
}

export default Desc