import { useEffect, useState } from "react";
import Header from "../components/Header";
import Music from "../components/Music";
import Desc from "../components/Desc";
import { Link, useParams } from "react-router-dom";
import { getSelectedSpot } from "../api/service";
import Logos from "../components/Logos";

const Spot = () => {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [audio, setAudio] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSelectedSpot(id);
      setTitle(data[0].title);
      setImage(data[0].image);
      setAudio(data[0].audio);
      setDesc(data[0].desc);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-500 to-yellow-300 min-h-screen w-full">
      <Logos />

      <Header title={title} image={image} />
      <Music audio={audio} />
      <Desc desc={desc} />

      <div className="flex justify-center items-center py-8">
        <Link to="/" className="rounded-lg bg-orange-500 px-16 py-4 text-white font-bold text-xl">Lihat Info Lainnya</Link>
      </div>
    </div>
  );
};

export default Spot;
