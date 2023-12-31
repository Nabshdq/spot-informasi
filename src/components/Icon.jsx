import Image from "next/image"
import logoSpotInformasiInklusiImage from "../../public/logo-spot-informasi-inklusi.png"

const Icon = () => {
    return (
        <div className="absolute z-40 top-[40%] flex justify-center items-center gap-2 md:flex-col md:items-start md:pl-[8%] md:top-[30%] md:gap-8">
            <Image
                src={logoSpotInformasiInklusiImage}
                alt="Spot Informasi Inklusi"
                className="w-[13%] md:w-1/4 md:ml-9 glowing-image"
            />
            <h3
                className="text-white font-bold w-1/2 text-center md:text-xl lg:text-2xl md:-ml-7 2xl:-ml-16 glowing-text"
            >
                Selamat Datang di<br />Spot Informasi Inklusi
            </h3>
        </div>
    );
}

export default Icon
