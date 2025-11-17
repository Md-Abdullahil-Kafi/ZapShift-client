import { FaTruckArrowRight } from 'react-icons/fa6';

const HowItWorks = () => {
    const data = [
        {
            img : <FaTruckArrowRight />,
            tittle: "Booking Pick & Drop",
            description: "From personal Packages to business Shipments-we deliver on time. every time"
        },
        {
            img : <FaTruckArrowRight />,
            tittle: "Booking Pick & Drop",
            description: "From personal Packages to business Shipments-we deliver on time. every time"
        },
        {
            img : <FaTruckArrowRight />,
            tittle: "Booking Pick & Drop",
            description: "From personal Packages to business Shipments-we deliver on time. every time"
        },
        {
            img : <FaTruckArrowRight />,
            tittle: "Booking Pick & Drop",
            description: "From personal Packages to business Shipments-we deliver on time. every time"
        },
    ]
    return (
        <div className='my-3 space-y-10 p-15'>
            <h1 className='font-bold text-4xl'>How it Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {
                data.map((card, index) => <div key={index}  className='p-5 bg-base-200 space-y-4 text-center lg:text-start rounded-2xl hover:bg-primary transition-all duration-500 cursor-pointer hover:shadow-2xl shadow-gray-500 hover:scale-105'>
                <div className='text-6xl flex justify-center lg:block'>{card.img}</div>
                <h1 className='font-bold text-base-content text-lg'>{card.tittle}</h1>
                <p className='text-base-content opacity-70'>{card.description}</p>
            </div>)
            }
            </div>

            
        </div>
    );
};

export default HowItWorks;<h1>How it Works</h1>
