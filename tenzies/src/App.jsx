import { useEffect, useState } from "react";
import Die from "./components/Die";

function App() {
    const [diceNumbers, setDiceNumbers] = useState(getRandomNumbers());

    function getRandomNumbers() {
        let newArr = [];

        for (let i = 0; i < 12; i++) {
            newArr.push(Math.ceil(Math.random() * 6));
        }

        return newArr;
    }

    return (
        <main className="mx-auto flex justify-center items-center bg-slate-200 rounded-md">
            <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
                {diceNumbers.map((num, i) => (
                    <Die key={i} number={num} />
                ))}
            </div>
        </main>
    );
}

export default App;
