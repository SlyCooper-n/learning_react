import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardsData from "./data";

function App() {
    return (
        <>
            <Navbar />
            <Hero />

            <div className="container w-full mx-auto my-24 px-8 flex overflow-x-scroll">
                {cardsData.map((data, i) => {
                    // if (i == 0) {
                    //     return <Card data={data} mLeft={true} />;
                    // }
                    return <Card data={data} mLeft={false} />;
                })}
            </div>
        </>
    );
}

export default App;
