import Image from "next/image"
import tutWuriHandayaniImage from "../../public/tut-wuri-handayani.png"
import kampusMerdekaImage from "../../public/kampus-merdeka.png"
import pkmImage from "../../public/pkm.png"
import simbelmawaImage from "../../public/simbelmawa.png"
import unhasImage from "../../public/unhas.png"

const Logos = ({ isBgWhite }) => {
    return (
        <div className={`${isBgWhite ? "bg-white" : "bg-white"} mb-6 p-3 mx-8 md:mx-96 rounded-b-xl flex justify-center items-center`}>
            <Image src={tutWuriHandayaniImage} alt="" className="w-11 md:w-28" />
            <Image src={kampusMerdekaImage} alt="" className="w-11 mr-2.5 md:w-28" />
            <Image src={simbelmawaImage} alt="" className="w-11 mr-2.5 md:w-28" />
            <Image src={pkmImage} alt="" className="w-11 md:w-28" />
            <Image src={unhasImage} alt="" className="w-11 -mr-2 md:w-28" />
        </div>
    )
}

export default Logos