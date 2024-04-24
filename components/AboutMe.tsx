import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
    
    return (
        <div className="mt-[-4rem] bg-black pb-[3rem] ">
            <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 
            lg:grid-cols-2 gap-[2rem]">
                <div>
                    <p className="heading__mini">About Me</p>
                    <h1 className="heading__primary">
                        Profesional <span className="text-blue-400"> Website</span> for 
                        your business.
                    </h1>
                    <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quisquam aut laboriosam 
                        facilis et magni odit temporibus id, explicabo veritatis cumque nobis excepturi numquam odio 
                        facere quam maxime culpa sunt?
                    </p>
                    <div className="mt-[2rem] space-y-3">
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-blue-400" />
                            <p className="text-[18px] text-white">Web Automation</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-blue-400" />
                            <p className="text-[18px] text-white">Web Scraper</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-blue-400" />
                            <p className="text-[18px] text-white">Web Development</p>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
                        <div className="p-6 text-center bg-blue-600">
                            <p className="text-[50px] text-white font-bold">3</p>
                            <p className="text-[18px] text-white font-600">
                                Years of Experience
                            </p>
                        </div>
                        <div className="p-6 text-center bg-blue-600">
                            <p className="text-[50px] text-white font-bold">100+</p>
                            <p className="text-[18px] text-white font-600">
                                Happy Client
                            </p>
                        </div>
                        <div className="p-6 text-center bg-blue-600">
                            <p className="text-[50px] text-white font-bold">150+</p>
                            <p className="text-[18px] text-white font-600">
                                Project Done
                            </p>
                        </div>
                        <div className="p-6 text-center bg-blue-600">
                            <p className="text-[50px] text-white font-bold">3</p>
                            <p className="text-[18px] text-white font-600">
                                Years of Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;