import React from "react";
import ReactDom from "react-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function ThemeToggle() {

    const { isDarkMode, setIsDarkMode } = useDarkMode();

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", !isDarkMode);
        setIsDarkMode(!isDarkMode);
    }

    return ReactDom.createPortal(
        <div className="theme-icon">
            {isDarkMode ? (
                <img
                    className
                    src="img/moon.png"
                    alt="Dark Mode"
                    width="30"
                    height="30"
                    onClick={toggleTheme}
                />
            ) : (
                // img
                <img
                    className
                    src="img/sun.png"
                    alt="light Mode"
                    width="30"
                    height="30"
                    onClick={toggleTheme}
                />
            )}
        </div>,
        document.getElementById("theme")
    );
}
