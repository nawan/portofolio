import React from 'react';
import MediaKreasi from '../assets/images/clients/mediakreasi.png';
import MoeniBox from '../assets/images/clients/moenibox.png';
import KrisnaTravel from '../assets/images/clients/krisnatravel.png';




const Clients = () => {
    return (
        <section id="clients" class="pt-36 pb-32 bg-slate-900">
            <div class="container">
                <div class="w-full px-4">
                    <div class="mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg text-primary mb-2 uppercase">Clients</h4>
                        <h2 class="font-bold text-white text-3xl 
                    mb-4 sm:text-4xl lg:text-5xl">Bekerjasama Dengan</h2>
                        <p class="font-medium text-md text-secondary
                    md:text-lg">
                            Saat ini saya bekerjasama dengan beberapa perusahan dalam melakukan pembuatan dan pengembangan website
                            milik beberapa rekan kerja.
                        </p>
                    </div>
                </div>
                <div class="w-full px-4">
                    <div class="flex flex-wrap items-center justify-center">
                        <a href="#client" class="max-w-[120px] mx-4 py-4 grayscale
                    opacity-60 transition duration-500 hover:grayscale-0
                    hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={MediaKreasi} alt="Media Kreasi" />
                        </a>
                        <a href="#client" class="max-w-[120px] mx-4 py-4 grayscale
                    opacity-60 transition duration-500 hover:grayscale-0
                    hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={MoeniBox} alt="Moeni Box" />
                        </a>
                        <a href="#client" class="max-w-[120px] mx-4 py-4 grayscale
                    opacity-60 transition duration-500 hover:grayscale-0
                    hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={KrisnaTravel} alt="Krisna Travel" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients