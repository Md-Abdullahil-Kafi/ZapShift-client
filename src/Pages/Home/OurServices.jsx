import React, { useEffect, useState } from 'react';

const OurServices = () => {
    const [service, setService]=useState([])
    useEffect(()=>{
        fetch("/ourService.json")
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    
    return (
        <div className='bg-secondary p-15 rounded-2xl my-10 space-y-8 text-center'>
            <h1 className='font-bold text-5xl text-white'>Our Services</h1>
            <p className='opacity-75 md:max-w-[718px] mx-auto text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                  service.map((data, index) => <div key={index} className='bg-base-200 rounded-3xl p-10 space-y-3 flex flex-col hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-amber-200' >
                    <div className='w-25 h-25 rounded-full overflow-hidden bg-base-300 mx-auto'>
                        <img className='' src={data.icon_link} alt="" />
                    </div>
                    <h1 className='font-semibold text-2xl'>{data.service_name}</h1>
                    <p className='opacity-75'>{data.description}</p>
                  </div>)  
                }
            </div>
        </div>
    );
};

export default OurServices;