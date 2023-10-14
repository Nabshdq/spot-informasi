import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SpotCard = ({ id, title, image, desc }) => {
    return (
        <Link href={`/${id}`} className='bg-white py-4 px-5 rounded-lg sm:w-[48%] md:w-[32%] lg:w-[24%]'>
            <Image width={300} height={300} src={image} alt={image} className='w-full h-32 object-cover mb-2' />
            <h3 className='text-orange-500 font-bold text-lg mb-2'>{title}</h3>
            <p className='text-orange-700 font-bold text-sm'>{desc.slice(0, 75)}...</p>
        </Link>
    )
}

export default SpotCard