import logoSpotInformasiInklusiImage from "../assets/images/logo-spot-informasi-inklusi.png"

const Icon = () => {
    return (
        <div className="absolute z-50 flex justify-between items-center w-full h-full p-10 md:flex-col md:items-start md:justify-center md:gap-10 md:pl-20">
            <img src={logoSpotInformasiInklusiImage} alt="Spot Informasi Inklusi" className="w-2/12 md:ml-8 lg:ml-20" />
            <h3 className="text-white font-bold md:w-1/4 text-center md:text-xl lg:text-3xl">Selamat Datang di Spot Informasi Inklusi</h3>
        </div>
    )
}

export default Icon