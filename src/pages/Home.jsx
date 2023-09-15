import React, { useEffect } from 'react'
import Header from '../components/Header'
import Music from '../components/Music'
import Desc from '../components/Desc'
import { getAllSpots } from '../api/service'

const Home = () => {
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllSpots()
            console.log(data);
        }
        fetchData()
    }, [])

    return (
        <div className='bg-yellow-400 min-h-screen w-full'>
            <Header />
            <Music />
            <Desc />
        </div>
    )
}

export default Home