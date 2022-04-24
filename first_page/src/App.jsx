import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SVGBackground from "./components/SVGBackground";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    function toggleTheme() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }

    return (
        <div
            className={`min-h-screen flex flex-col ${
                darkMode ? "text-slate-100" : "text-black"
            }  font-sans`}
        >
            <Header theme={darkMode} toggler={toggleTheme} />
            <MainContent theme={darkMode} />
            <SVGBackground />
        </div>
    );
}

export default App;
