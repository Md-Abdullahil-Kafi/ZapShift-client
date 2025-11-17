import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from "../../../assets/banner/banner1.png"
import bannerImg2 from "../../../assets/banner/banner2.png"
import bannerImg3 from "../../../assets/banner/banner3.png"
import { FaLocationArrow } from 'react-icons/fa6';
import { Link } from 'react-router';

const HeroBanner = () => {

    return (
        <div className=''>
            <Carousel autoPlay={true} interval={200000} infiniteLoop={true}>
                <div className='relative'>
                    <img src={bannerImg1} />
                    <div className='absolute bottom-28 left-15 z-50 lg:flex items-center gap-5 font-semibold hidden '>
                    <span className='flex items-center'>
                        <Link className=' rounded-full bg-primary py-3 px-13'>Track Your Parcel </Link>
                        <span className='bg-gray-700 text-white p-2 rounded-full'><FaLocationArrow size={28}></FaLocationArrow></span>
                    </span>
                    <Link className='rounded-full bg-base-300 py-3 px-13'>Be A Rider</Link>
                    </div>
                </div>
               
            </Carousel>
        </div>
    );
};

export default HeroBanner;