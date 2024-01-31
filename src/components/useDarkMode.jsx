import { useEffect, useState } from "react";

export default function useDarkMode() {

    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const tampil = window.document.documentElement;
        tampil.classList.remove(colorTheme);
        tampil.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme]
}
