import React from 'react';
import HeroBanner from './HeroBanner';
import HowItWorks from './HowItWorks';
import OurServices from './OurServices';
import BrandSwiper from './BrandsSwiper';
import TrackServices from './TrackServices';
import MarchantCard from './MarchantCard';
import CustomerFeedback from './CustomerFeedback';
import FAQ from './FAQ';

const Home = () => {
    return (
        <section>
            <HeroBanner></HeroBanner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <BrandSwiper></BrandSwiper>
            <hr className=' border-b-0 border-zinc-400 border-dashed  h-[5px] mb-20  ' />
            <TrackServices></TrackServices>
            <hr className=' border-b-0 border-zinc-400 border-dashed  h-[5px] mb-20  ' />
            <MarchantCard></MarchantCard>
            <CustomerFeedback></CustomerFeedback>
            <FAQ></FAQ>
        </section>
    );
};

export default Home;