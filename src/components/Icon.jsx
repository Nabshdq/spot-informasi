import Image from "next/image"
import logoSpotInformasiInklusiImage from "../../public/logo-spot-informasi-inklusi.png"

const Icon = () => {
    const imageGlowStyle = {
        filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8)", // Efek "glow" kuning ke jinggaan pada gambar
        borderRadius: "50%", // Membuat gambar menjadi lingkaran
    };

    const textGlowStyle = {
        textShadow: "0 0 40px rgba(255, 165, 0, 0.8)", // Efek "glow" kuning ke jinggaan pada teks
    };

    return (
        <div className="absolute z-40 top-[40%] flex justify-center items-center gap-4 md:flex-col md:items-start md:pl-[8%] md:top-[30%] md:gap-8">
            <Image
                src={logoSpotInformasiInklusiImage}
                alt="Spot Informasi Inklusi"
                className="w-[13%] md:w-1/4 md:ml-12"
                style={imageGlowStyle}
            />
            <h3
                className="text-white font-bold w-1/2 md:w-1/3 text-center md:text-xl lg:text-3xl"
                style={textGlowStyle}
            >
                Selamat Datang di Spot Informasi Inklusi
            </h3>
        </div>
    );
}

export default Icon
