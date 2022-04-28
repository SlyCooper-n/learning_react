import { useState } from "react";
import Home from "./components/Home";
import Questions from "./components/Questions";

function App() {
    const [home, setHome] = useState(true);

    function startQuiz() {
        setHome(false);
    }

    return <>{home ? <Home onClick={startQuiz} /> : <Questions />}</>;
}

export default App;
