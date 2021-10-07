import {useState, useEffect} from 'react'

const useDarkMode = () => {

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
    
    return {isDarkMode, setIsDarkMode}
    
}

export default useDarkMode
