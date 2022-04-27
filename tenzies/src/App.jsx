import { nanoid } from "nanoid";
import { useEffect, useId, useState } from "react";
import Die from "./components/Die";

function App() {
    const [diceNumbers, setDiceNumbers] = useState(() => allNewDice());

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

            <div className="my-4 flex justify-center items-center">
                <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
                    {diceElements}
                </div>
            </div>

            <button
                onClick={rollDice}
                className="px-10 py-3 bg-blue-900 text-slate-100 text-xl font-semibold rounded-md"
            >
                Roll
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
