import React from 'react';
import ServiceCard from './Helper/ServiceCard';

const Services = () => {

    return (
        <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
            <div className="text-center">
                <p className='heading__mini'>Popular Services</p>
                <h1 className="heading__primary">
                    My Special <span className='text-blue-400'>Services</span> For You
                </h1>
            </div>
            <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
                <div>
                    <ServiceCard title="Python Development" num="01" />
                </div>
                <div>
                    <ServiceCard title="Python Web" num="02" />
                </div>
                <div>
                    <ServiceCard title="Data Science" num="03" />
                </div>
                <div>
                    <ServiceCard title="Data Science" num="04" />
                </div>
                <div>
                    <ServiceCard title="Data Science" num="05" />
                </div>
            </div>
        </div>
    );
};

export default Services;