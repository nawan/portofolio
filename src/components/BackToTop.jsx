import React, { useState, useEffect } from 'react';

function BackToTop() {

    const [toTop, setToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.querySelector('#keatas')
            window.scrollY > 0 ? setToTop(true) : setToTop(false);
        })
    }, []);

    return (
        <a href="#home" id="keatas" className={`justify-center items-center h-14 w-14 bg-primary rounded-full
        fixed z-[9999] right-4 bottom-4 p-4 hover:animate-pulse animate-bounce ${toTop ? "none" : "hidden"}`}>
            <span class="block mx-auto h-5 w-5 border-t-2 border-l-2 rotate-45
        mt-2"></span>
        </a>
    )
}

export default BackToTop