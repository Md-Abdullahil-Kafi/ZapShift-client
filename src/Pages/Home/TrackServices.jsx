import React, { useEffect, useState } from 'react';

const TrackServices = () => {
    const [service, setService]=useState([]);
    useEffect(()=>{
        fetch('/trackServices.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='grid grid-cols-1 gap-5 mb-20'>
            {
                service.map(data => <div className='p-10 rounded-2xl md:flex items-center gap-10 bg-base-300 text-center md:text-start'>
                    <div className='md:border-r md:border-b-0 border-b border-dashed border-zinc-400 p-10 flex md:flex-row justify-center'>
                        <img className=' w-52'  src={data.image_link} alt="Track Image" />
                    </div>
                    <div>
                        <h1 className='font-semibold text-2xl mb-7'>{data.title}</h1>
                        <p className=' opacity-80'>{data.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TrackServices;