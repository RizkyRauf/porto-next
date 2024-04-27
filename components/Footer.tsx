import { EnvelopeIcon, MapIcon, PhoneIcon, } from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-black">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5
             border-gray-600 border-opacity-40">
                <div>
                    <div className="font-logo text-white text-[18px]">
                        <span className="text-[30px] md:text[40px] text-blue-400">AR</span> Rizky Rauf
                    </div>
                    <h1 className="text-[14px] mt-[0.5rem] text-white opacity-75">
                        As a <span className="text-blue-400">Frontend Developer</span>, 
                        I thrive on crafting immersive digital experiences. My passion lies in the intersection of 
                        <span className="text-blue-400"> Web Development</span>, where creativity meets functionality, 
                        and <span className="text-blue-400">Web Scraping</span> and <span className="text-blue-400">Web Automation</span>, 
                        where I uncover valuable insights and streamline processes with precision.
                    </h1>
                    <p className="mt-[1.3rem] text-blue-300 underline font-semibold">
                        raufmoveon@gmail.com
                    </p>
                </div>
                <div className="md:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px] border-b-[1.4px]">
                        Address
                    </h1>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <MapIcon className="w-[1rem] h-[1rem] text-blue-300"/>
                        <p className="text-[17px] font-normal text-white opacity-80">
                            Jakarta Selatan, <a href="http://google.com" target="_blank"> Indonesia</a>
                        </p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <EnvelopeIcon className="w-[1rem] h-[1rem] text-blue-300"/>
                        <p className="text-[17px] font-normal text-white opacity-80">
                            <a href="mailto:raufmoveon@gmail" target="_blank">raufmoveon@gmail.com</a>
                        </p>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                        <PhoneIcon className="w-[1rem] h-[1rem] text-blue-300"/>
                        <p className="text-[17px] font-normal text-white opacity-80">
                            <a href="https://api.whatsapp.com/send/?phone=6281311627552&text&type=phone_number&app_absent=0" target="_blank">
                                +62 813-1162-7552
                            </a>
                        </p>
                    </div>
                </div>
                <div className="lg:mx-auto">
                    <h1 className="text-white font-semibold mb-[1.4rem] text-[17px] border-b-[1.4px]">
                        Social Media
                    </h1>
                    <div className="flex items-center mt-[1rem] space-x-3">
                        <a href="https://www.facebook.com/ahmad.rizky.rauf.aridho/" target="_blank">
                            <Image src="/images/facebook.png" alt="Facebook" width={35} height={35} />
                        </a>
                        <a href="https://www.instagram.com/rauf_aridho/" target="_blank">
                            <Image src="/images/instagram.png" alt="Instagram" width={35} height={35} />
                        </a>
                        <a href="https://twitter.com/RizkyRaauf" target="_blank">
                            <Image src="/images/twitter.png" alt="Twitter" width={35} height={35} />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmad-rizky-rauf-6925438a/" target="_blank">
                            <Image src="/images/linkedin.png" alt="LinkedIn" width={35} height={35} />
                        </a>
                        <a href="https://github.com/RizkyRauf" target="_blank">
                            <Image src="/images/github.png" alt="Github" width={35} height={35} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-75 text-center">{" "}
                <a href="https://raufmoveon.com" target="_blank" className="text-white">
                     &#169; Copyright Achmad Riski Rauf - 2024
                </a>
                <span className="text-blue-300"></span>
            </div>
        </div>
    );
};

export default Footer;