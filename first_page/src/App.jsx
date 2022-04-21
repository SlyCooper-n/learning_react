import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SVGBackground from "./components/SVGBackground";

function App() {
    return (
        <div className="min-h-screen flex flex-col text-slate-100 font-sans">
            <Header />
            <MainContent />
            <SVGBackground />
        </div>
    );
}

export default App;
