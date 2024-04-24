
import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import Image from "next/image";

interface Props {
    showNav: boolean;
    closeNav:()=>void
}


const NavMobile = ({ closeNav, showNav }:Props) => {
    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            <div className={`fixed top-0 transform ${navOpenStyle} transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}>
            </div>
            <ul className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}>
                <li>
                    <a href="https://www.facebook.com/ahmad.rizky.rauf.aridho/" target="_blank" className="flex items-center space-x-1">
                    <Image src="/images/facebook.png" alt="Facebook" width={35} height={35} />
                    <span className="text-white">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/rauf_aridho/" target="_blank" className="flex items-center space-x-1">
                    <Image src="/images/instagram.png" alt="Instagram" width={35} height={35} />
                    <span className="text-white">Instagram</span>
                    </a>
                </li>
                
                <li>
                    <a href="https://www.linkedin.com/in/ahmad-rizky-rauf-6925438a/" target="_blank" className="flex items-center space-x-1">
                    <Image src="/images/linkedin.png" alt="LinkedIn" width={35} height={35} />
                    <span className="text-white">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RizkyRauf" target="_blank" className="flex items-center space-x-1">
                    <Image src="/images/github.png" alt="Github" width={35} height={35} />
                    <span className="text-white">Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/RizkyRaauf" target="_blank" className="flex items-center space-x-1">
                    <Image src="/images/twitter.png" alt="Twitter" width={35} height={35} />
                    <span className="text-white">Twitter</span>
                    </a>
                </li>
                <XMarkIcon onClick={closeNav} className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] text-white" />
            </ul>
        </div>
    );
};

export default NavMobile;