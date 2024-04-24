import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
    openNav :() => void
}

const Nav = ({openNav}:Props) => {

    const [navSticky, setNavSticky] = useState(false)

    useEffect(()=>{
        const handler = () => {
            if(window.scrollY>=90){
                setNavSticky(true);
            }
            if(window.scrollY<=90){
                setNavSticky(false);
            }
        };
        window.addEventListener('scroll', handler);
    },[])

    const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

    return <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}>
        <div className=" flex items-center h-[9vh] justify-between w-[80%] mx-auto">
            <div className="font-logo text-white text-[18px]">
                <span className="text-[30px] md:text-[40px] text-blue-400">AR</span> Rauf Aridho
            </div>
            <ul className="md:flex hidden items-center space-x-5">
                <li>
                    <a href="https://www.facebook.com/ahmad.rizky.rauf.aridho/" target="_blank">
                        <Image src="/images/facebook.png" alt="Facebook" width={35} height={35} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/rauf_aridho/" target="_blank">
                        <Image src="/images/instagram.png" alt="Instagram" width={35} height={35} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/RizkyRaauf" target="_blank">
                        <Image src="/images/twitter.png" alt="Twitter" width={35} height={35} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ahmad-rizky-rauf-6925438a/" target="_blank">
                        <Image src="/images/linkedin.png" alt="LinkedIn" width={35} height={35} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RizkyRauf" target="_blank">
                        <Image src="/images/github.png" alt="Github" width={35} height={35} />
                    </a>
                </li>
            </ul>
            <Bars3CenterLeftIcon onClick={openNav} className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180" />
        </div>
    </div>;
};

export default Nav;