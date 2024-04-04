import React, { useState, useEffect } from 'react';
import Switcher from './Switcher';


export const Header = () => {

    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    const linksMenu = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Portofolio", link: "#portfolio" },
        { name: "Clients", link: "#clients" },
        { name: "Contact", link: "#contact" },
    ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        })

    }, []);

    return (
        <nav id='nav' className={`fixed w-full left-0 top-0 z-[999] 
        ${sticky ? "navbar-fixed" : " text-white dark:text-dark"
            }`}>
            <div className='flex items-center justify-between'>
                <div className='mx-10'>
                    <a href="#home" className='font-bold md:text-4xl text-2xl text-primary
                        block'>Nawan<span className='
                        font-bold md:text-4xl text-2xl text-secondary dark:text-white'>site</span></a>
                </div>
                <div className={` ${sticky ? " text-dark dark:text-white" : "bg-primary"
                    }  md:block hidden px-7 font-medium py-3 rounded-bl-full`}>
                    <ul className='flex items-center'>
                        {
                            linksMenu?.map((menu, i) => (
                                <li key={i} className='group border-b-slate-300 border-b-0'>
                                    <a href={menu?.link} className='text-base font-bold
                                        py-3 mx-8 flex'>
                                        {menu?.name}
                                    </a>
                                </li>
                            ))
                        }
                        <li className='group border-b-slate-300 border-b-0'>
                            <div className="flex flex-col w-8 h-8 items-center justify-center 
                            rounded-full bg-yellow-400 dark:bg-slate-500 text-sm">
                                <Switcher />
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-[999] ${open ? "text-primary" : "text-primary"
                        } text-3xl md:hidden m-5 mx-10`}>
                    <div className='flex items-center px-6 py-6'>
                        <button id="hamburger" name="hamburger" type="button"
                            onClick={() => setOpen(!open)}
                            className={`${open ? "hamburger-active" : "hamburger"} 
                            block absolute right-3 lg:hidden`}>
                            <span className="hamburger-line transition duration-300
                        ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300
                        ease-in-out"></span>
                            <span className="hamburger-line transition duration-300
                        ease-in-out origin-bottom-left"></span>
                        </button>
                    </div>
                    <div className={`md:hidden absolute py-2
                    bg-primary shadow-lg rounded-b
                    min-w-min right-3 left-3 top-full transition duration-700 ease-in-out 
                    ${open ? "top-100" : "hidden"
                        }`}>
                        <ul className="flex flex-col justify-center text-lg text-white">
                            {linksMenu?.map((menu, i) => (
                                <li
                                    onClick={() => setOpen(false)}
                                    key={i}
                                    className="px-6 py-2 border-b-slate-300 border-b-2"
                                >
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))}
                            <li className='flex px-5 justify-end items-center mt-2'>
                                <div className="flex flex-col w-9 h-9 items-center justify-center rounded-full bg-yellow-400 dark:bg-slate-500">
                                    <Switcher />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        //                             <div id="dropNavLang" className="hidden absolute lg:bg-white  lg:dark:bg-dark justify-start
        //                             overflow-auto bg-primary lg:w-24 lg:min-h-fit lg:mx-4 lg:rounded-b-lg">
        //                                 <a href="index.html" className="text-base font-bold text-white
        //                             py-1 mx-8 lg:mx-3 flex lg:text-dark
        //                             dark:text-white items-center cursor-pointer lg:hover:font-extrabold">ID
        //                                 </a>
        //                                 <a href="en.html" className="text-base font-bold text-white
        //                             py-1 mx-8 lg:mx-3 lg:py-0.5 flex lg:text-dark
        //                             dark:text-white items-center cursor-pointer lg:hover:font-extrabold">EN
        //                                 </a>
        //                             </div>
        //                         </li>
        //                         {/* <li className="group flex justify-end">

        //                         </li> */}
        //                     </ul>
    )
}

export default Header