import React, { useEffect } from 'react';
import KrisnaTravel from '../assets/images/krisnatravel.jpg';
import MediaKreasi from '../assets/images/mediakreasi.png';
import MoeniBox from '../assets/images/moenibox.png';
import RentalMobil from '../assets/images/rentalmobil.png';
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
                <div class="w-full px-2">
                    <div class="max-w-xl mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg text-primary mb-2 uppercase">Portfolio</h4>
                        <h2 class="font-bold text-dark text-3xl mb-4
                    sm:text-4xl lg:text-5xl dark:text-white">Project Terbaru Saya</h2>
                        <p class="font-medium text-md text-secondary md:text-lg">
                            Saat ini saya berfokus dalam membuat dan mengembangkan sistem administrasi perkantoran dalam menunjang kegiatan operasional karyawan.
                            Selain itu saya juga memiliki pengalaman dalam membuat landing page untuk website agen penjualan tiket pesawat. Berikut ini beberapa project yang pernah saya kerjakan sendiri.
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
                            Landing Page Agen Tiket Pesawat
                        </h3>
                        <p class="font-medium text-base text-secondary">
                            Landing page ini dibuat menggunakan HTML5 dan Javascrpit, serta menggunakan tailwind sebagai framework utility css.
                            Karena berfokus pada frontend saja, fitur pencarian tiket akan diproses menggunakan API pihak ketiga dari sistem keagenan.
                        </p>
                    </div>
                    <div class="mb-12 p-4 md:w-1/2" data-aos={"zoom-in-up"}>
                        <div class="rounded-md shadow-md overflow-hidden hover:scale-110">
                            <img src={MediaKreasi} alt="Media Kreasi" width="w-full" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                            Fullstack sistem admin manajemen event dan rental alat
                        </h3>
                        <p class="font-medium text-base text-secondary mb-1">
                            Sistem manajemen administrasi yang buat menggunakan framework laravel dengan PHP, Javascript, Jquery dan Bootstrap.
                            Sistem admin ini dipakai oleh mediakreasi untuk mengelola persewaan alat event dan membuat perencanaan event musik, seni dan pagelaran budaya.
                            Demo sistem aplikasi tersedia dan bisa dilihat melalui link berikut :
                        </p>
                        <a href="https://mediakreasi.ptsass.com/" target="_blank" rel="noreferrer" class="text-sm w-16 h-7 mr-3 rounded-lg
                        flex justify-center items-center border border-black dark:border-slate-300
                            hover:border-primary hover:bg-primary hover:text-white text-black dark:text-slate-300">Link
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" class="fill-current m-1" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 
                            45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8
                            80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 
                            32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                        </a>
                    </div>
                    <div class="mb-12 p-4 md:w-1/2" data-aos={"zoom-in-up"}>
                        <div class="rounded-md shadow-md overflow-hidden hover:scale-110">
                            <img src={MoeniBox} alt="Moeni Box" width="w-full" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                            Fullstack Sistem Admin Pre Order Pabrik
                        </h3>
                        <p class="font-medium text-base text-secondary">
                            Sistem manajemen admin pre order yang buat menggunakan framework laravel dengan PHP, Javascript, Jquery dan Bootstrap.
                            Sistem manajemen admin ini dipakai oleh industri pembuatan box sound system, dengan adanya sistem ini membantu
                            para karyawan pabrik untuk melakukan penjadwalan proses pembuatan box.
                            Client dapat memantau proses pembuatannya menggunakan link URL memalui fitur generate link (seperti link API) secara realtime.
                            Demo sistem aplikasi tersedia dan bisa dilihat melalui link berikut :
                        </p>
                        <a href="https://moeni.ptsass.com/" target="_blank" rel="noreferrer" class="text-sm w-16 h-7 mr-3 rounded-lg
                        flex justify-center items-center border border-black dark:border-slate-300
                            hover:border-primary hover:bg-primary hover:text-white text-black dark:text-slate-300">Link
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" class="fill-current m-1" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 
                            45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8
                            80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 
                            32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                        </a>
                    </div>
                    <div class="mb-12 p-4 md:w-1/2" data-aos={"zoom-in-up"}>
                        <div class="rounded-md shadow-md overflow-hidden hover:scale-110">
                            <img src={RentalMobil} alt="eLearning" width="w-full" />
                        </div>
                        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
                            Sistem Manajemen Rental Mobil
                        </h3>
                        <p class="font-medium text-base text-secondary">
                            Sistem ini dibuat menggunakan framework laravel dengan PHP, Javascript, jquery dan Bootstrap, untuk data analytic menggunakan library
                            javascript dari Highchart. Digunakan oleh perusahaan rental mobil untuk melakukan manajemen rental mobil dan juga jadi satu dengan sistem billing
                            pembayarannya. Demo sistem aplikasi tersedia dan bisa dilihat melalui link berikut :
                        </p>
                        <a href="https://rental.ptsass.com/" target="_blank" rel="noreferrer" class="text-sm w-16 h-7 mr-3 rounded-lg
                        flex justify-center items-center border border-black dark:border-slate-300
                            hover:border-primary hover:bg-primary hover:text-white text-black dark:text-slate-300">Link
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" class="fill-current m-1" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 
                            45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8
                            80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 
                            32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio