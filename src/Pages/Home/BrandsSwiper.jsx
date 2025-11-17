// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function BrandSwiper() {
    const [brands, setBrands] = useState([]);
    useEffect(()=>{
        fetch("/brands.json")
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
  return (
    <>
      <div className='my-10 p-15 hidden md:block'>
        <Swiper
        slidesPerView={4}
        FreeMode={true}
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {
            brands.map(brand => <SwiperSlide><img className=' w-full' src={brand.image_link} alt="Brand Image" /></SwiperSlide>)
        }
      </Swiper>
      </div>
      <div className='p-10 md:hidden'>
        <Swiper
        slidesPerView={2}
        FreeMode={true}
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {
            brands.map(brand => <SwiperSlide><img className='' src={brand.image_link} alt="Brand Image" /></SwiperSlide>)
        }
      </Swiper>
      </div>
    </>
  );
}
