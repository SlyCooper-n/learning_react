import logo from "../react-logo.svg";
import MySwitch from "./MySwitch";

export default function Header(props) {
    return (
        <>
            <header
                className={`px-8 py-4 md:py-0 flex flex-col sm:flex-row justify-between items-center ${
                    !props.theme && "shadow-lg"
                } z-10`}
                style={
                    props.theme
                        ? { background: "#21222a" }
                        : { background: "#fff" }
                }
            >
                <nav className="h-28 flex-1 flex flex-wrap justify-between items-center">
                    <img src={logo} alt="react logo" className="w-20 -ml-4" />
                    <h2 className="mr-auto text-4xl font-semibold text-sky-300">
                        ReactFacts
                    </h2>
                    <h3 className="ml-4 mr-8 text-xl font-semibold">
                        React Course - Project 1
                    </h3>
                </nav>

                <MySwitch toggler={props.toggler} />
            </header>
        </>
    );
}
