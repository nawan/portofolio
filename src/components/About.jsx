import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import '../assets/css/background.css';

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 700
        })
    }, [])

    return (
        <section id='about' class="pt-5 pb-7 bg-green-50 bg-home dark:bg-dark">
            <div class="container">
                <div class="flex flex-wrap">
                    <div class="w-full px-4 mb-10 lg:w-1/2" data-aos={"fade-up-right"}>
                        <h4 class="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
                        <h2 class="font-bold text-dark text-3xl mb-5 
                    max-w-md lg:text-4xl dark:text-white">Keep Calm and Be Good</h2>
                        <p class="font-medium text-base text-secondary max-w-xl">
                            Saya adalah website developer yang berfokus pada backend.
                            Bahasa pemrograman yang sering saya gunakan adalah HTML, CSS, PHP dan JavaScript dengan menggunakan
                            framework Laravel, selain itu saat ini juga saya sedang mengembangkan kemampuan pemrograman menggunakan ReactJS.
                        </p>
                    </div>
                    <div class="w-full px-4 lg:w-1/2" data-aos={"fade-up-left"}>
                        <h2 class="font-bold text-dark text-3xl mb-5 
                    max-w-md lg:text-4xl dark:text-white">Temukan saya di</h2>
                        <p class="font-medium text-base text-secondary mb-6 lg:text-lg">
                            Anda dapat mengghubungi saya melalui berbagai platform sosial media atau melalui pesan whatsapp melalui link berikut ini
                        </p>
                        <div class="flex items-center">
                            <a href="https://wa.me/+6281228062102" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                            hover:border-primary hover:bg-primary hover:text-white
                            text-slate-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-current" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/nawan_inst" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                        hover:border-primary hover:bg-primary hover:text-white
                        text-slate-300">
                                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Instagram</title>
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126
                            1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 
                            1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 
                            1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 
                            1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 
                            1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896
                                1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211
                                0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 
                                0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405
                                0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646
                                1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/ekosetiyawan/" target="_blank" rel="noreferrer" class="w-9 h-9 mr-3 rounded-full
                        flex justify-center items-center border border-slate-300
                        hover:border-primary hover:bg-primary hover:text-white
                        text-slate-300">
                                <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>LinkedIn</title>
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9
                            1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14
                            0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0
                            23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About