import { useEffect, useState } from "react";
import { getAllCategoriesName, getAllSpots, getSpotsByCategories } from "@/api/service";
import SpotCard from "@/components/SpotCard";
import Carousel from "@/components/Carousel";

export default function Home() {
  const [data, setData] = useState([])
  const [spots, setSpots] = useState(data)
  const [categoriesName, setCategoriesName] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [defaultKeyword, setDefaultKeyword] = useState("")

  const onKeywordChangeHandler = (e) => {
    setDefaultKeyword(e.target.value)
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
      if (selectedCategory === "Semua") setSpots(data)
      else {
        const getSpotsForChoosenCategory = async () => {
          const spotsForCategory = await getSpotsByCategories(selectedCategory);
          setSpots(spotsForCategory);
        };
        getSpotsForChoosenCategory();
      }
    } else {
      setSpots(data);
    }
  }, [selectedCategory]);


  return (
    <div className="bg-gradient-to-br from-yellow-300 to-orange-700 via-orange-600 min-h-screen w-full pb-16">
      <Carousel />

      <div className="bg-white mx-4 rounded-lg py-2 mb-6 mt-8">
        <h1 className="text-center text-orange-600 font-extrabold text-xl">Daftar Spot Info Inklusi</h1>
      </div>

      <div className="mb-6 flex justify-center items-center px-4 gap-3">
        <input type="text" name="mysearch" onChange={onKeywordChangeHandler} placeholder="Cari..." className="bg-gray-100 pl-2 pr-14 py-2 rounded-lg text-black w-2/3" />

        <select className="select select-error w-1/3 max-w-xs text-xs bg-orange-600 border-yellow-300 border-2 text-white font-semibold" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option selected disabled>Kategori</option>
          <option selected value="Semua">Semua</option>
          {categoriesName.map((category, i) => (
            <option key={i} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-4 px-7 justify-center items-stretch flex-wrap sm:flex-row">
        {spots.map((spot, i) => (
          <SpotCard key={i} id={spot.id} title={spot.title} image={spot.image} desc={spot.desc} />
        ))}
      </div>
    </div>
  );
};
