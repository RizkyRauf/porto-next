import React  from "react";
import Image from "next/image";

function downloadCV() {
    // Ganti 'nama_folder' dengan nama folder tempat Anda menyimpan CV.pdf
    var fileUrl = '/cv/cv.pdf';
    window.open(fileUrl, '_blank');
  }

const Hero = () => {

    return (
        <div className="w-[100vw] pt-[2vh] md:pt-[10vh] h-[85vh] md:h-[100vh] custom-bg">
            <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
                    <div>
                        <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">Welcome To My Portfolio</h1>
                        <div data-aos="fade-right" data-aos-delay="400">
                            <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.6rem] text-white">
                                Hi, I&apos;m <span className="text-blue-400">Rizki Rauf</span>
                            </h1>
                        </div>
                        <p data-aos="fade-up" data-aos-delay="800" className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]">
                            As a <span className="text-blue-400">Frontend Developer</span>, 
                            I thrive on crafting immersive digital experiences. My passion lies in the intersection of 
                            <span className="text-blue-400"> Web Development</span>, where creativity meets functionality, 
                            and <span className="text-blue-400">Web Scraping</span> and <span className="text-blue-400">Web Automation</span>, 
                            where I uncover valuable insights and streamline processes with precision.
                        </p>
                        <div className="mt-[2rem] flex items-center space-x-6">
                            <a href="https://github.com/RizkyRauf" target="_blank" rel="noopener noreferrer">
                                <button data-aos="zoom-in" data-aos-delay="1200" className="relative flex h-[50px] w-40 items-center justify-center font-semibold 
                                    overflow-hidden bg-yellow-600 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 
                                    before:rounded-full before:bg-blue-400 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                                    <Image className="relative z-10 mr-2" src="/images/github.svg" alt="arrow" width={30} height={30} />
                                    <span className="relative z-10"> Github</span>
                                </button>
                            </a>
                            <button data-aos="zoom-out" data-aos-delay="1600" className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white 
                            font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 
                            before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 
                            before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black 
                            hover:before:-rotate-180" onClick={downloadCV}>
                                <span className="relative z-10">Download CV</span>
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Image src="/images/her2.png" alt="hero" width={500} height={500} className="w-[80%] mt-[-2rem] mx-auto object-cover mr-[0]" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;