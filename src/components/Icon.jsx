import Image from "next/image"
import logoSpotInformasiInklusiImage from "../../public/logo-spot-informasi-inklusi.png"

const Icon = () => {
    return (
        <div className="absolute z-40 top-[40%] flex justify-center items-center gap-4 md:flex-col md:items-start md:pl-[8%] md:top-[30%] md:gap-8">
            <Image src={logoSpotInformasiInklusiImage} alt="Spot Informasi Inklusi" className="w-[13%] md:w-1/4 md:ml-12" />
            <h3 className="text-white font-bold w-1/2 md:w-1/3 text-center md:text-xl lg:text-3xl">Selamat Datang di Spot Informasi Inklusi</h3>
        </div>
    )
}

export default Icon