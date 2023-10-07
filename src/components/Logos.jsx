import tutWuriHandayaniImage from "../assets/images/tut-wuri-handayani.png"
import kampusMerdekaImage from "../assets/images/kampus-merdeka.png"
import pkmImage from "../assets/images/pkm.png"
import simbelmawaImage from "../assets/images/simbelmawa.png"
import unhasImage from "../assets/images/unhas.png"
import spotInformasiInklusiImage from "../assets/images/spot-informasi-inklusi.png"

const Logos = ({ isBgWhite }) => {
    return (
        <div className={`${isBgWhite ? "bg-white" : "bg-transparent"} mb-6 p-3 mx-8 rounded-b-xl flex justify-center items-center`}>
            <img src={tutWuriHandayaniImage} alt="" className="w-11 md:w-28" />
            <img src={kampusMerdekaImage} alt="" className="w-11 mr-2.5 md:w-28" />
            <img src={simbelmawaImage} alt="" className="w-11 mr-2.5 md:w-28" />
            <img src={pkmImage} alt="" className="w-11 md:w-28" />
            <img src={unhasImage} alt="" className="w-11 -mr-2 md:w-28" />
        </div>
    )
}

export default Logos