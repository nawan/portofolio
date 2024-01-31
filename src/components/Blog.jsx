import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

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
                    sm:text-4xl lg:text-5xl dark:text-white">Tulisan Terkini</h2>
                        <p class="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur
                            adipisicing
                            elit. Quisquam nobis ex praesentium magni molestias rem!
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src="https://source.unsplash.com/360x200?programming" alt="programming" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark dark:text-white
                                hover:text-primary dark:hover:text-primary truncate">
                                        Tips Belajar Pemrograman
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                    Minima ipsam totam esse tenetur eius?</p>
                                <a href="#blog" class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src="https://source.unsplash.com/360x200?ui+ux" alt="design" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        Tips Belajar UI/UX
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                    Provident odio hic ea eaque laudantium vitae, dolore distinctio assumenda qui
                                    necessitatibus.</p>
                                <a href="#blog" class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src="https://source.unsplash.com/360x200?mysql" alt="database" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        Bagaimana menggunakan MySql dalam website ?
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                    Exercitationem voluptate rerum alias, eligendi assumenda nisi quam sequi dicta!</p>
                                <a href="#blog" class="font-medium text-sm text-white
                            bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya...</a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 lg:w-1/2 xl:1/3" data-aos={"zoom-in-up"}>
                        <div class="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg mb-10">
                            <img src="https://source.unsplash.com/360x200?hardisk" alt="hardware" class="w-full" />
                            <div class="py-8 px-6">
                                <h3>
                                    <a href="#blog" class="block mb-3 font-semibold text-xl text-dark
                                dark:text-white hover:text-primary dark:hover:text-primary truncate">
                                        Optimasi kemampuan hardware komputer PC
                                    </a>
                                </h3>
                                <p class="font-medium text-base text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Deserunt quia laborum velit tempore
                                    voluptatum suscipit delectus voluptatibus aliquid eum, laboriosam fugiat obcaecati
                                    possimus et optio odit id earum at blanditiis!</p>
                                <a href="#blog" class="font-medium text-sm text-white
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