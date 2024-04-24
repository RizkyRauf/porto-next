import React from "react";

const Contact = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
                <div>
                    <p className='heading__mini'>Contact Me</p>
                    <h1 className="heading__primary"> 
                        Lets make your <span className='text-blue-400'>Brand</span>{" "}
                        brilliant
                    </h1>
                    <p className="text-[15px] text-white mt-[1rem] opacity-75">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus adipisci non quod veniam 
                        harum vel iusto recusandae qui ab doloribus, est maiores quos, 
                        numquam ipsum impedit minima error similique facere?
                    </p>
                    <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-blue-500 underline font-bold">
                        +62 813 1162 7552
                    </h1>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4" 
                        />
                        
                    </div>
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4" 
                    />
                    <textarea 
                        placeholder="Message" 
                        className="py-[0.7rem] mt-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4" 
                        rows={4}
                    ></textarea>
                    <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md px-4">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;