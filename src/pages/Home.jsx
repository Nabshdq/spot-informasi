import { useEffect, useState } from "react";
import Logos from "../components/Logos";
import { getAllSpots } from "../api/service";
import SpotCard from "../components/SpotCard";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([])
  const [spots, setSpots] = useState(data)
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultKeyword = searchParams.get("judul")

  const onKeywordChangeHandler = (judul) => {
    setSearchParams({ judul })
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getAllSpots()
      if (data) {
        setData(data)
        setSpots(data)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    if (defaultKeyword !== null) {
      const searchResult = data.filter((spot) => {
        const isTitleMatch = spot.title.toLowerCase().includes(defaultKeyword.toLowerCase());
        const isDescMatch = spot.desc.toLowerCase().includes(defaultKeyword.toLowerCase());
        return isTitleMatch || isDescMatch;
      });
      setSpots(searchResult);
    }
  }, [defaultKeyword]);


  return (
    <div className="bg-gradient-to-br from-orange-500 to-yellow-300 min-h-screen w-full pb-8">
      <Logos />

      <div className="bg-white mx-4 rounded-lg py-2 mb-6">
        <h1 className="text-center text-orange-600 font-extrabold text-xl">Daftar Spot Info Inklusi</h1>
      </div>

      <div className="mb-6 flex justify-center items-center">
        <input type="text" onChange={(e) => onKeywordChangeHandler(e.target.value)} placeholder="ISI INI AJG" className="bg-gray-100 pl-2 pr-14 py-2 rounded-lg text-black" />
      </div>

      <div className="flex flex-col gap-4 px-7">
        {spots.map((spot, i) => (
          <SpotCard key={i} id={spot.id} title={spot.title} image={spot.image} desc={spot.desc} />
        ))}
      </div>
    </div>
  );
};

export default Home;
