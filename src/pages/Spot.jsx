import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Music from '../components/Music'
import Desc from '../components/Desc'
import { useParams } from 'react-router-dom'
import { getSelectedSpot } from '../api/service'

const Spot = () => {
    const { id } = useParams();

    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [audio, setAudio] = useState()
    const [desc, setDesc] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSelectedSpot(id)
            setTitle(data.data.data[0].attributes.title)
            setImage(data.data.data[0].attributes.image.data.attributes.url)
            setAudio(data.data.data[0].attributes.audio.data.attributes.url)
            setDesc(data.data.data[0].attributes.desc)
        }
        fetchData()
    }, [])

    return (
        <div className='bg-yellow-400 min-h-screen w-full'>
            <Header title={title} image={image} />
            <Music audio={audio} />
            <Desc desc={desc} />
        </div>
    )
}

export default Spot