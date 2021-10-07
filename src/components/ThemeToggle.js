import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom';

export default function ThemeToggle() {
    
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
      var browserDark = localStorage.getItem("darkMode");
      if (browserDark === null) {
          localStorage.setItem("darkMode", false);
      }
      if (browserDark === "true") {
          document.body.classList.add("dark-mode");
          setIsDarkMode(true);
      }
  }, []);


  function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", !isDarkMode);
      setIsDarkMode(!isDarkMode);
  }

    return ReactDom.createPortal (
         <div className="theme-icon">
            {isDarkMode ? (
                <img className src="img/moon.png" alt="Dark Mode"  width="30" height="30"onClick={toggleTheme}/>
                // img
            ) : (
                <img className src="img/sun.png" alt="light Mode"  width="30" height="30"onClick={toggleTheme}/>
            )}
        </div>
    , document.getElementById("theme"));
}

