import React from 'react';

const MarchantCard = () => {
    return (
        <div className='bg-secondary relative rounded-4xl'>
            <header className='lg:flex absolute z-0 hidden'>
                <img src="https://i.ibb.co/8nRybVDs/Vector-1.png" alt="" />
                <img src="https://i.ibb.co/cGKM3M7/Vector-2.png" alt="" />
            </header>
            <main className='flex flex-col-reverse lg:flex-row text-center md:text-start gap-10 md:justify-between p-20 text-white'>
                <div className='md:max-w-[673px]'>
                    <h1 className='font-semibold text-3xl mb-5'>Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className='md:max-w-[516px] opacity-80 mb-10'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className='md:flex gap-5 space-y-5'>
                        <button className='rounded-full btn btn-primary text-black px-9'>Become a Merchant</button>
                        <button className='rounded-full btn btn-outline text-primary'>Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div>
                    <img className='' src="https://i.ibb.co/3m2mv7sR/Layer-1.png" alt="" />
                </div>
            </main>
        </div>
    );
};

export default MarchantCard;