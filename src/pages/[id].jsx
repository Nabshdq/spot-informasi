import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Music from "@/components/Music";
import Desc from "@/components/Desc";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSelectedSpot } from "@/api/service";
import Logos from "@/components/Logos";

export default function Spot() {
  const router = useRouter()
  const id = router.query.id

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [audio, setAudio] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSelectedSpot(id);
        if (data && data.length > 0) {
          setTitle(data[0].title);
          setImage(data[0].image);
          setAudio(data[0].audio);
          setDesc(data[0].desc);
        }
      } catch (error) {
      }
    };
    fetchData();
  }, [router, id]);

  return (
    <div className="bg-gradient-to-br from-orange-500 to-yellow-300 min-h-screen w-full">
      <Logos isBgWhite={true} />

      <div className="sm:px-24 lg:px-0">
        <Header title={title} image={image} />
      </div>
      <Music audio={audio} />
      <Desc desc={desc} />

      <div className="flex justify-center items-center py-8">
        <Link href="/" className="rounded-lg bg-orange-500 px-16 py-4 text-white font-bold text-xl">Lihat Info Lainnya</Link>
      </div>
    </div>
  );
};
