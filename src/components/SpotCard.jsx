import React from 'react'
import { Link } from 'react-router-dom'

const SpotCard = ({ id, title, image, desc }) => {
    return (
        <Link to={`/${id}`} className='bg-white py-4 px-5 rounded-lg'>
            <img src={image} alt={image} className='w-full h-32 object-cover mb-2' />
            <h3 className='text-orange-500 font-bold text-lg mb-2'>{title}</h3>
            <p className='text-orange-700 font-bold'>{desc.slice(0, 100)}...</p>
        </Link>
    )
}

export default SpotCard