import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import FotoProfil from '../assets/images/profil.png';
import '../assets/css/background.css';


const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 700
        })
    })

    return (
        <section id='home' className="pt-28 bg-green-50 bg-home dark:bg-dark">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2" data-aos={"fade-left"}>
                        <h1 className="text-base font-semibold text-primary
                    md:text-xl">Hallo 😁
                            saya <span className="block font-bold text-slate-900 text-4xl mt-1
                        lg:text-5xl dark:text-white">Eko Setiyawan</span>
                        </h1>
                        <h2 className="font-medium text-slate-500 text-lg mb-5">Saya adalah seorang Website Developer
                        </h2>
                        <div className='flex justify-items-center gap-2'>
                            <a href="https://wa.me/+6281228062102" target="_blank" rel='noreferrer' className="font-semibold text-white bg-primary
                    py-3 px-3 rounded-full hover:shadow-lg
                    hover:opacity-70 transition duration-300 ease-in-out flex justify-center items-center h-9 w-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-current m-2" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                                Kontak Saya</a>

                            <a href="https://drive.google.com/file/d/1FW9s7UnVto7woSl3naPfxymIYzjkwZQh/view?usp=drive_link" target="_blank" rel='noreferrer' className="font-semibold text-white bg-primary
                    py-3 px-3 rounded-full hover:shadow-lg
                    hover:opacity-70 transition duration-300 ease-in-out flex justify-center items-center h-9 w-40">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" className='text-white fill-current m-2'><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" /></svg>
                                Resume</a>

                        </div>
                        {/* <a href="https://drive.google.com/file/d/1FW9s7UnVto7woSl3naPfxymIYzjkwZQh/view?usp=drive_link" target="_blank" rel='noreferrer' className="text-base font-semibold text-white bg-primary
                    py-3 px-8 rounded-full hover:shadow-lg
                    hover:opacity-70 transition duration-300 ease-in-out m-2">
                            My Resume</a> */}
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2" data-aos={"fade-right"}>
                        <div className="relative mt-20 lg:mt-9 lg:right-0">
                            <img src={FotoProfil} alt="Eko Setiyawan" className="max-w-full mx-auto md:w-60 sm:w-10" />
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