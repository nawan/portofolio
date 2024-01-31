import React from 'react';
import Tokopedia from '../assets/images/clients/Tokopedia.svg.png';
import Agoda from '../assets/images/clients/agoda.png';
import Shopee from '../assets/images/clients/shopee.png';
import Gojek from '../assets/images/clients/gojek.png';



const Clients = () => {
    return (
        <section id="clients" class="pt-36 pb-32 bg-slate-900">
            <div class="container">
                <div class="w-full px-4">
                    <div class="mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg text-primary mb-2 uppercase">Clients</h4>
                        <h2 class="font-bold text-white text-3xl 
                    mb-4 sm:text-4xl lg:text-5xl">Pernah Bekerjasama Dengan</h2>
                        <p class="font-medium text-md text-secondary
                    md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe tempore magnam
                            quasi
                            distinctio expedita natus aliquam dolor accusamus voluptatem!
                        </p>
                    </div>
                </div>
                <div class="w-full px-4">
                    <div class="flex flex-wrap items-center justify-center">
                        <a href="https://www.tokopedia.com/" target="_blank" rel='noreferrer' class="max-w-[120px] mx-4 py-4 grayscale
                    opacity-60 transition duration-500 hover:grayscale-0
                    hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Tokopedia} alt="tokopedia" />
                        </a>
                        <a href="https://www.agoda.com/" target="_blank" rel='noreferrer' class="max-w-[120px] mx-4 py-4 grayscale
                    opacity-60 transition duration-500 hover:grayscale-0
                    hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Agoda} alt="agoda" />
                        </a>
                        <a href="https://www.shopee.com/" target="_blank" rel='noreferrer' class="max-w-[120px] mx-4 py-4 grayscale
                    opacity-60 transition duration-500 hover:grayscale-0
                    hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Shopee} alt="shopee" width="50px" height="50px" />
                        </a>
                        <a href="https://www.gojek.com/" target="_blank" rel='noreferrer' class="max-w-[120px] mx-4 py-4 grayscale
                    opacity-60 transition duration-500 hover:grayscale-0
                    hover:opacity-100 lg:mx-6 xl:mx-8">
                            <img src={Gojek} alt="gojek" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients