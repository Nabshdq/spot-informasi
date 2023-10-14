import carousel1Image from "../../public/carousel-1.jpg"
import carousel2Image from "../../public/carousel-2.jpg"
import carousel3Image from "../../public/carousel-3.jpg"
import carousel4Image from "../../public/carousel-4.jpg"
import CarouselItem from "./CarouselItem";
import Icon from "./Icon";
import Logos from "./Logos";

const Carousel = () => {
    return (
        <div className="relative">
            <div className="absolute z-50 w-full">
                <Logos />
            </div>

            <Icon />

            <div className="carousel relative w-full md:h-screen">
                <CarouselItem
                    slide={"slide1"}
                    image={carousel1Image}
                    prevSlide={"slide4"}
                    nextSlide={"slide2"}
                />

                <CarouselItem
                    slide={"slide2"}
                    image={carousel2Image}
                    prevSlide={"slide1"}
                    nextSlide={"slide3"}
                />

                <CarouselItem
                    slide={"slide3"}
                    image={carousel3Image}
                    prevSlide={"slide2"}
                    nextSlide={"slide4"}
                />

                <CarouselItem
                    slide={"slide4"}
                    image={carousel4Image}
                    prevSlide={"slide3"}
                    nextSlide={"slide1"}
                />
            </div>
        </div>
    );
}

export default Carousel