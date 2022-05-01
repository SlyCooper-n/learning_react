import { useState } from "react";
import Home from "./components/Home";
import Questions from "./components/Questions";

function App() {
    const [home, setHome] = useState(true);

    function startQuiz() {
        setHome(false);
    }

    function returnHome() {
        setHome(true);
    }

    return (
        <>
            {home ? (
                <Home onClick={startQuiz} />
            ) : (
                <Questions returnHome={returnHome} />
            )}
        </>
    );
}

export default App;
