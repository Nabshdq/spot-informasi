import { useEffect, useState } from "react";
import Logos from "../components/Logos";
import { getAllCategoriesName, getAllSpots, getSpotsByCategories } from "../api/service";
import SpotCard from "../components/SpotCard";
import { useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Icon from "../components/Icon";

const Home = () => {
  const [data, setData] = useState([])
  const [spots, setSpots] = useState(data)
  const [searchParams, setSearchParams] = useSearchParams()
  const [categoriesName, setCategoriesName] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()

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

    const getOptionValue = async () => {
      const data = await getAllCategoriesName()
      setCategoriesName(data)
    }
    getOptionValue()
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

  useEffect(() => {
    if (selectedCategory) {
      const getSpotsForChoosenCategory = async () => {
        const spotsForCategory = await getSpotsByCategories(selectedCategory);
        setSpots(spotsForCategory);
      };
      getSpotsForChoosenCategory();
    } else {
      setSpots(data);
    }
  }, [selectedCategory]);


  return (
    <div className="bg-gradient-to-br from-yellow-300 to-orange-500 via-orange-600 min-h-screen w-full pb-8">
      <Logos />

      <Icon />

      <Carousel />

      <div className="bg-white mx-4 rounded-lg py-2 mb-6 mt-8">
        <h1 className="text-center text-orange-600 font-extrabold text-xl">Daftar Spot Info Inklusi</h1>
      </div>

      <div className="flex justify-center mb-8">
        <select className="select select-error w-4/6 max-w-xs" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option disabled selected>Pilih Kategori</option>
          {categoriesName.map((category, i) => (
            <option key={i} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6 flex justify-center items-center">
        <input type="text" onChange={(e) => onKeywordChangeHandler(e.target.value)} placeholder="Search" className="bg-gray-100 pl-2 pr-14 py-2 rounded-lg text-black" />
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
