import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="text-center">
                <p className='heading__mini'>Popular Projects</p>
                <h1 className="heading__primary">
                    My Special <span className='text-blue-400'>Projects</span>
                </h1>
            </div>
            <ProjectCard 
                title="Web Automation"
                text="Web automation is the process of automation that utilizes software to perform tasks typically done by humans on the web. 
                It involves the use of scripts or bots to automate interactions with websites, 
                such as filling out forms, clicking buttons, navigating between pages, extracting data, 
                or performing other actions according to predefined rules."
                tech1="Python" 
                tech2="Selenium" 
                tech3="Pandas" 
                tech4="Numpy" 
                image="/images/p5.png" 
            />
            <ProjectCard 
                title="Web Scraping"
                text="Web scraping is a technique for extracting information or data from web pages automatically. 
                This process involves fetching content from web pages, such as text, images, or other structural data, 
                and then saving it for further analysis or other uses."
                tech1="Python" 
                tech2="Selenium" 
                tech3="WebDriver"  
                tech4="Pandas" 
                image="/images/webscraping.jpg" 
            />
        </div>
        
    );
};

export default Project;