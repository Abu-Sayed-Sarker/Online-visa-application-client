import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Banner from "../Components/HomePage/Banner";
import VisaCatagory from "../Components/HomePage/visaCatagory";
import LetestVisa from "../Components/HomePage/LetestVisa";



const Home = () => {
    const [themes, settheme] = useState(true);

    useEffect(() => {
        themeChange(false);

        // Set theme from localStorage on load
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

    const handleThemeChange = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        settheme(!themes)
    };



    return (
        <div>



            <div>
                {
                    themes ? <button onClick={() => handleThemeChange("dark")} data-set-theme="dark" className="btn btn-secondary mr-2">
                        Dark Theme
                    </button> : <button onClick={() => handleThemeChange("light")} data-set-theme="light" className="btn btn-primary mr-2">
                        Light Theme
                    </button>
                }
            </div>

            <Banner></Banner>
            <VisaCatagory></VisaCatagory>
            <LetestVisa></LetestVisa>
        </div>
    );
};

export default Home;