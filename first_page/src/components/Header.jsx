import logo from "../react-logo.svg";

export default function Header() {
    return (
        <>
            <header className="px-8 py-4 md:py-0">
                <nav className="h-28 flex flex-wrap justify-between items-center">
                    <img src={logo} alt="react logo" className="w-20 -ml-4" />
                    <h2 className="mr-auto text-4xl font-semibold text-sky-300">
                        ReactFacts
                    </h2>
                    <h3 className="ml-4 text-xl font-semibold">
                        React Course - Project 1
                    </h3>
                </nav>
            </header>

            <style jsx>{`
                header {
                    background: #21222a;
                }
            `}</style>
        </>
    );
}
