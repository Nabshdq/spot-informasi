import carousel1Image from "../assets/images/carousel-1.jpg"
import carousel2Image from "../assets/images/carousel-2.jpg"
import carousel3Image from "../assets/images/carousel-3.jpg"
import carousel4Image from "../assets/images/carousel-4.jpg"
import Icon from "./Icon"

const Carousel = () => {
    return (
        <div className="relative">
            <Icon />
            <div className="carousel w-full md:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* <Icon /> */}
                    <img src={carousel1Image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-ghost text-white font-black text-2xl">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-ghost text-white font-black text-2xl">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    {/* <Icon /> */}
                    <img src={carousel2Image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-ghost text-white font-black text-2xl">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-ghost text-white font-black text-2xl">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    {/* <Icon /> */}
                    <img src={carousel3Image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-ghost text-white font-black text-2xl">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-ghost text-white font-black text-2xl">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    {/* <Icon /> */}
                    <img src={carousel4Image} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-ghost text-white font-black text-2xl">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-ghost text-white font-black text-2xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel