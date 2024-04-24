import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Laravel from '../assets/images/blog/Laravel.png';
import PHP from '../assets/images/blog/PHP.jpg';
import Javascript from '../assets/images/blog/javascript.jpeg';
import sql from '../assets/images/blog/sql.jpg';
import html from '../assets/images/blog/html.png';
import css from '../assets/images/blog/css.jpg';

function Blog() {

    useEffect(() => {
        Aos.init({
            duration: 700
        });
    }, []);

    return (
        <section id="blog" class="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
            <div class="container">
                <div class="w-full px-4">
                    <div class="max-w-xl mx-auto text-center mb-16">
                        <h4 class="font-semibold text-lg text-primary mb-2 uppercase">Blog</h4>
                        <h2 class="font-bold text-dark text-3xl mb-4
                    sm:text-4xl lg:text-5xl dark:text-white">Bahasa Pemrograman</h2>
                        <p class="font-medium text-md text-secondary md:text-lg">
                            Berikut ini framework dan beberapa bahasa pemrograman yang saya kuasai dalam membuat
                            dan mengembangkan suatu sistem website.
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src={Laravel} alt="Laravel" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark dark:text-white
                                hover:text-primary dark:hover:text-primary truncate">
                                        Laravel Framework
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">
                                    Laravel adalah framework PHP open-source yang menyediakan berbagai fitur untuk membuat website berbasis PHP modern.
                                </p>
                                <a href="https://revou.co/kosakata/laravel" target='_blank' rel='noreferrer' class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src={PHP} alt="PHP" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        PHP
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">
                                    Hypertext Preprocessor atau PHP adalah bahasa penulisan skrip open-source yang banyak digunakan dalam pemrograman atau pengembangan website (web development).
                                </p>
                                <a href="https://www.hostinger.co.id/tutorial/apa-itu-php/" target='_blank' rel='noreferrer' class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src={Javascript} alt="database" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        Javascript
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">
                                    JavaScript adalah bahasa pemrograman yang digunakan developer untuk membuat halaman web yang interaktif.
                                    Dari menyegarkan umpan media sosial hingga menampilkan animasi dan peta interaktif, fungsi JavaScript dapat meningkatkan pengalaman pengguna situs web.
                                </p>
                                <a href="https://aws.amazon.com/id/what-is/javascript/" target='_blank' rel='noreferrer' class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src={sql} alt="hardware" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        SQL
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">
                                    Bahasa kueri terstruktur (SQL) adalah bahasa pemrograman untuk menyimpan dan memproses informasi dalam basis data relasional.
                                    Sebuah basis data relasional menyimpan informasi dalam bentuk tabel, dengan baris dan kolom yang mewakili atribut data yang berbeda serta berbagai hubungan antara nilai data.
                                </p>
                                <a href="https://aws.amazon.com/id/what-is/sql/" target='_blank' rel='noreferrer' class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src={html} alt="database" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        HTML
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">
                                    HTML adalah kependekan dari Hypertext Markup Language yang merupakan sebuah bahasa markup. HTML adalah kode untuk membuat struktur halaman suatu website yang menarik, saling terhubung satu dengan yang lainnya, dan yang pasti dapat diakses melalui internet.
                                </p>
                                <a href="https://www.domainesia.com/berita/html-adalah/" target='_blank' rel='noreferrer' class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src={css} alt="hardware" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        CSS
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">
                                    CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs.
                                </p>
                                <a href="https://www.hostinger.co.id/tutorial/apa-itu-css" target='_blank' rel='noreferrer' class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog