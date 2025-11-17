import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa6";
import FeedbackCard from "./FeedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const CustomerFeedback = () => {
  const [feedback, setFeedback] = useState([
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      image_link: "https://via.placeholder.com/60/FFD700/000000?text=E", // Placeholder
      bgColor: "bg-base-100",
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      image_link: "https://via.placeholder.com/60/ADFF2F/000000?text=N", // Placeholder
      bgColor: "bg-[#e5ffe5]", // Light green background from image
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      image_link: "https://via.placeholder.com/60/ADD8E6/000000?text=F", // Placeholder
      bgColor: "bg-base-100",
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      image_link: "https://via.placeholder.com/60/FA8072/000000?text=C", // Placeholder
      bgColor: "bg-base-100",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      image_link: "https://via.placeholder.com/60/DDA0DD/000000?text=L", // Placeholder
      bgColor: "bg-base-100",
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      image_link: "https://via.placeholder.com/60/FFA07A/000000?text=R", // Placeholder
      bgColor: "bg-base-100",
    },
  ]);

  return (
    <div className="my-10">
      <header className="space-y-5 text-center">
        <div className="w-fit mx-auto">
            <img className="h-[150px]" src="https://i.ibb.co/gMPfcwMt/image.png" alt="" />
        </div>
        <h1 className="font-bold text-3xl">What our customers are sayings</h1>
        <p className="max-w-[832px]  opacity-80 mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </header>
      <main className=" md:p-10 py-5">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
         <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard></FeedbackCard>
        </SwiperSlide>
      </Swiper>
      </main>

    </div>
  );
};

export default CustomerFeedback;
