import { nanoid } from "nanoid";
import { useEffect, useId, useState } from "react";
import Die from "./components/Die";

function App() {
    const [diceNumbers, setDiceNumbers] = useState(() => getRandomNumbers());

    function getRandomNumbers() {
        let newArr = [];

        for (let i = 0; i < 12; i++) {
            let heldValue;
            if (diceNumbers[i].isHeld) {
                heldValue = diceNumbers[i].value;
            }

            newArr.push({
                id: nanoid(),
                value: heldValue ?? Math.ceil(Math.random() * 6),
                isHeld: diceNumbers[i].isHeld || false,
            });
        }

        // diceNumbers.map(die => {
        //     return die.isHeld == true ? {...die, value: }
        // });

        return newArr;
    }

    function holdDie(id) {
        setDiceNumbers(
            diceNumbers.map((die) => {
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
            <div className="flex justify-center items-center">
                <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
                    {diceElements}
                </div>
            </div>

            <button
                onClick={() => setDiceNumbers(getRandomNumbers())}
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
