import React, { useEffect } from 'react';
import KrisnaTravel from '../assets/images/krisnatravel.jpg';
import Strawrage from '../assets/images/strawrage.jpg';
import WisataJogja from '../assets/images/wisatajogja.png';
import Moodle from '../assets/images/moodle_elearning.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 700
        });
    }, []);

    return (
        <section id='portfolio' class="pt-36 pb-16 bg-slate-100 dark:bg-slate-800">
            <div class="container">
                <div class="w-full px-4">
                    <div class="max-w-xl mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg text-primary mb-2 uppercase">Portfolio</h4>
                        <h2 class="font-bold text-dark text-3xl mb-4
                    sm:text-4xl lg:text-5xl dark:text-white">Project Terbaru Saya</h2>
                        <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Cum saepe tempore magnam quasi
                            distinctio expedita natus aliquam dolor accusamus voluptatem!
                        </p>
                    </div>
                </div>
                <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12
            xl:mx-auto">
                    <div class="mb-12 p-4 md:w-1/2" data-aos={"zoom-in-up"}>
                        <div class="rounded-md shadow-md overflow-hidden hover:scale-110">
                            <img src={KrisnaTravel} alt="KrisnaTravel" width="w-full" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                            Krisnatravel Website Landing Page
                        </h3>
                        <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Aliquam nostrum commodi exercitationem error quam quis non
                            quisquam delectus cupiditate. Quasi!
                        </p>
                    </div>
                    <div class="mb-12 p-4 md:w-1/2" data-aos={"zoom-in-up"}>
                        <div class="rounded-md shadow-md overflow-hidden hover:scale-110">
                            <img src={Strawrage} alt="Strawrage" width="w-full" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                            Strawrage Website Landing Page
                        </h3>
                        <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Aliquam nostrum commodi exercitationem error quam quis non
                            quisquam delectus cupiditate. Quasi!
                        </p>
                    </div>
                    <div class="mb-12 p-4 md:w-1/2" data-aos={"zoom-in-up"}>
                        <div class="rounded-md shadow-md overflow-hidden hover:scale-110">
                            <img src={WisataJogja} alt="WisataJogja" width="w-full" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                            Fullstack Website Wisata Jogja
                        </h3>
                        <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Aliquam nostrum commodi exercitationem error quam quis non
                            quisquam delectus cupiditate. Quasi!
                        </p>
                    </div>
                    <div class="mb-12 p-4 md:w-1/2" data-aos={"zoom-in-up"}>
                        <div class="rounded-md shadow-md overflow-hidden hover:scale-110">
                            <img src={Moodle} alt="eLearning" width="w-full" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                            E-Learning Website Menggunakan Moodle
                        </h3>
                        <p class="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Aliquam nostrum commodi exercitationem error quam quis non
                            quisquam delectus cupiditate. Quasi!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio