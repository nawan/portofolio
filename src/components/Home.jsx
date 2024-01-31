import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import FotoProfil from '../assets/images/profil.png';


const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 700
        })
    })

    return (
        <section id='home' className="pt-28 dark:bg-dark">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2" data-aos={"fade-left"}>
                        <h1 className="text-base font-semibold text-primary
                    md:text-xl">Hallo 😁
                            saya <span className="block font-bold text-slate-900 text-4xl mt-1
                        lg:text-5xl dark:text-white">Eko Setiyawan</span>
                        </h1>
                        <h2 className="font-medium text-slate-500 text-lg mb-5">Saya adalah seorang Website Developer dan Dosen
                        </h2>
                        <a href="https://wa.me/+6281228062102" target="_blank" rel='noreferrer' className="text-base font-semibold text-white bg-primary
                    py-3 px-8 rounded-full hover:shadow-lg
                    hover:opacity-70 transition duration-300 ease-in-out">Kontak Saya</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2" data-aos={"fade-right"}>
                        <div className="relative mt-20 lg:mt-9 lg:right-0">
                            <img src={FotoProfil} alt="Eko Setiyawan" className="max-w-full mx-auto md:w-60" />
                            <span className="absolute bottom-20 -z-10
                        left-1/2 -translate-x-40 md:scale-110">
                                <svg height="350" width="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#047857" d="M62.2,-46.9C74.2,-34.5,73.1,-9,66.8,13.9C60.5,36.9,49,57.3,29.8,69.5C10.6,
                                81.6,-16.2,85.4,-35.4,75.4C-54.6,65.4,-66.2,41.6,-68.2,19.4C-70.2,-2.8,-62.6,-23.3,-49.6,-35.9C-36.7,
                                -48.6,-18.3,-53.3,3.4,-56C25.1,-58.7,50.2,-59.3,62.2,-46.9Z"
                                        transform="translate(100 100) scale(1.4)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home