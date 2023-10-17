import Image from "next/image";

const CarouselItem = ({
    slide,
    image,
    prevSlide,
    nextSlide,
}) => {
    return (
        <div id={slide} className="carousel-item relative w-full">
            <Image
                src={image}
                alt="Carousel Image"
                className="w-full object-cover brightness-50 md:blur-sm"
            />

            {/* Tablet - Desktop View START */}
            <div className="hidden md:flex absolute justify-end items-end w-full h-full brightness-100">
                <Image
                    src={image}
                    alt="carousel"
                    className="w-10/12 h-4/6 object-cover md:w-8/12 md:h-5/6 md:rounded-3xl"
                />
            </div>
            {/* Tablet - Desktop View END */}

            <div className="absolute z-50 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${prevSlide}`} className="btn btn-circle btn-ghost text-lg">
                    ❮
                </a>
                <a href={`#${nextSlide}`} className="btn btn-circle btn-ghost text-lg">
                    ❯
                </a>
            </div >
        </div >
    );
}

export default CarouselItem