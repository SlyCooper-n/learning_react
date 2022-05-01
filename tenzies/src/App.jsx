import { nanoid } from "nanoid";
import { useEffect, useId, useState } from "react";
import Die from "./components/Die";

function App() {
    const [diceNumbers, setDiceNumbers] = useState(() => allNewDice()),
        [tenzies, setTenzies] = useState(false),
        [turn, setTurn] = useState(0),
        [bestTime, setBestTime] = useState(() => {
            return localStorage.getItem("bestTime") ?? "No records";
        }),
        [time, setTime] = useState(0);

    useEffect(() => {
        // initializes the start time
        localStorage.setItem("startTime", new Date().getTime());
    }, []);

    useEffect(() => {
        // makes the track of time and best time
        const endTime = new Date().getTime(),
            startTime = localStorage.getItem("startTime"),
            time = ((endTime - startTime) / 1000).toFixed(2),
            bestTime = localStorage.getItem("bestTime") ?? "No records";

        setTime(time);

        if (time != 0 && time < bestTime) {
            localStorage.setItem("bestTime", time);
            setBestTime(localStorage.getItem("bestTime"));
        }
    }, [tenzies]);

    useEffect(() => {
        // checks if the game is over
        let num = diceNumbers[0].value;
        let bool = diceNumbers.every((die) => die.isHeld && die.value == num);

        if (bool) {
            setTenzies(true);
        }
    }, [diceNumbers]);

    function generateNewDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
        };
    }

    function allNewDice() {
        let newArr = [];

        for (let i = 0; i < 12; i++) {
            newArr.push(generateNewDie());
        }

        return newArr;
    }

    function rollDice() {
        if (tenzies) {
            setTenzies(false);
            localStorage.setItem("startTime", new Date().getTime());
            setTurn(0);
            setDiceNumbers(() => allNewDice());
            return;
        }

        setTurn((prevTurn) => ++prevTurn);
        setDiceNumbers((prevDiceNumbers) =>
            prevDiceNumbers.map((die) => {
                return die.isHeld ? die : generateNewDie();
            })
        );
    }

    function holdDie(id) {
        setDiceNumbers((prevDiceNumbers) =>
            prevDiceNumbers.map((die) => {
                return die.id == id
                    ? {
                          ...die,
                          value: die.value,
                          isHeld: !die.isHeld,
                      }
                    : die;
            })
        );
    }

    const diceElements = diceNumbers.map((num) => (
        <Die key={num.id} number={num} onClick={holdDie} />
    ));

    return (
        <main className="mx-auto p-8 text-center bg-slate-200 rounded-md">
            <h1 className="mb-4 text-5xl font-bold text-slate-800">Tenzies</h1>

            <p className="w-3/4 mx-auto text-xl font-semibold text-slate-600">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>

            <span className="mt-8 block font-semibold text-slate-800">
                Best time:{" "}
                {bestTime == "No records" ? bestTime : `${bestTime} seconds`}
            </span>

            <div className="my-4 flex justify-center items-center">
                <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
                    {diceElements}
                </div>
            </div>

            {turn > 0 && !tenzies && (
                <span className="block mb-8 font-semibold text-slate-800">
                    {turn} {turn == 1 ? "Roll" : "Rolls"}
                </span>
            )}

            {tenzies && (
                <span className="block mb-8 font-semibold text-slate-800">
                    You won in {turn} Rolls and {time} seconds.
                </span>
            )}

            <button
                onClick={rollDice}
                className="px-10 py-3 bg-blue-900 text-slate-100 text-xl font-semibold rounded-md"
            >
                {tenzies ? "New game" : "Roll"}
            </button>

            <style jsx>{`
                button.px-10:active {
                    box-shadow: 1px 1px 10px #0008 inset;
                }
            `}</style>
        </main>
    );
}

export default App;
