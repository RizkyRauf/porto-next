import React from "react";
import SkillsCard from "./Helper/SkillsCard";

const Skills = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-white">
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center" >
                <div className="col-span-3">
                    <p className="heading__mini text-black opacity-70">My Skills</p>
                    <h1 className="heading__primary text-black opacity-70">
                        Discover In-Demand <span className="text-blue-600">Skills</span> & Experience
                    </h1>
                    <p className="text-[15px] mb-[1.5rem] text-black opacity-70 mt-[1.5rem]">
                        Unlock the potential of my expertise and experience to create exceptional results.
                    </p>
                    <button className="relative flex h-[50px] w-80 items-center justify-center font-semibold 
                    overflow-hidden bg-gray-900 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 
                    before:rounded-full before:bg-blue-500 before:duration-500 before:ease-out hover:before:h-80 hover:before:w-80">
                        <span className="relative z-10">Ready to Collaborate ?</span>
                    </button>
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center">
                            <SkillsCard 
                            title="Python"
                            image = "/images/python.svg"
                            percent = ""
                            />
                        </div>
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center" data-aos-delay="200">
                            <SkillsCard 
                            title="Selenium"
                            image = "/images/selenium.svg"
                            percent = ""
                            />
                        </div>
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center" data-aos-delay="400">
                            <SkillsCard 
                            title="Django"
                            image = "/images/django.svg"
                            percent = ""
                            />
                        </div>
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center" data-aos-delay="600">
                            <SkillsCard 
                            title="Scrapy"
                            image = "/images/scrapy.svg"
                            percent = ""
                            />
                        </div>
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center" data-aos-delay="800">
                            <SkillsCard 
                            title="JavaScript"
                            image = "/images/js.svg"
                            percent = ""
                            />
                        </div>
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center" data-aos-delay="1000">
                            <SkillsCard 
                            title="HTML"
                            image = "/images/html.svg"
                            percent = ""
                            />
                        </div>
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center" data-aos-delay="1200">
                            <SkillsCard 
                            title="Playwright"
                            image = "/images/playwright.svg"
                            percent = ""
                            />
                        </div>
                        <div data-aos="flip-left" data-aos-ancor-placement="top-center" data-aos-delay="1400">
                            <SkillsCard 
                            title="Mysql"
                            image = "/images/mysql.svg"
                            percent = ""
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;