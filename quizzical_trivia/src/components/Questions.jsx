import { nanoid } from "nanoid";
import { useEffect, useId, useState } from "react";
import blob from "../public/img/blob5.jpg";
import blobs from "../public/img/blobs.jpg";

export default function Questions() {
    const [questionsData, setQuestionsData] = useState([]),
        [answersData, setAnswersData] = useState([]);

    useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium"
        )
            .then((res) => res.json())
            .then((data) => {
                setAnswersData([]);
                data.results.forEach((el) => {
                    // organizing the answers array
                    // to put correct and incorrect answers together and randomly sorted
                    let answers = el.incorrect_answers,
                        num = Math.floor(
                            Math.random() * (el.incorrect_answers.length + 1)
                        ),
                        newArr;

                    if (num == el.incorrect_answers.length) {
                        answers.push(el.correct_answer);
                    } else {
                        let temp = answers[num];
                        answers[num] = el.correct_answer;
                        answers.push(temp);
                    }

                    newArr = answers.map((el, i) => {
                        return { id: i, text: el, selected: false };
                    });

                    setAnswersData((prevAnswersData) => [
                        ...prevAnswersData,
                        newArr,
                    ]);
                });

                setQuestionsData(data.results);
            });
    }, []);

    useEffect(() => {
        console.log("mudou");
    }, [answersData]);

    function selectAnswer(id, index) {
        setAnswersData((prevAnswersData) =>
            prevAnswersData.map((el, i) => {
                if (i == index) {
                    return el.map((e) =>
                        e.id == id
                            ? { ...e, selected: !e.selected }
                            : { ...e, selected: false }
                    );
                }

                return el;
            })
        );
    }

    return (
        <>
            <div className="absolute w-full h-full top-0 right-0 z-0">
                <img src={blob} alt="blob" className="absolute top-0 right-0" />
                <img
                    src={blobs}
                    alt="blobs"
                    className="absolute bottom-0 left-0"
                />
            </div>

            <main className="questions-container relative flex flex-col justify-center items-center z-10">
                <div className="w-5/6 mx-auto">
                    {questionsData.map((ques, i) => {
                        return (
                            <Question
                                key={nanoid()}
                                data={ques}
                                answers={answersData[i]}
                                indexArr={i}
                                onClick={selectAnswer}
                            />
                        );
                    })}
                </div>

                <button
                    disabled={true}
                    className="px-8 py-2 bg-indigo-700 rounded-md font-semibold text-slate-100 opacity-0 transition"
                >
                    Check answers
                </button>
            </main>

            <style jsx>{`
                main.questions-container {
                    min-height: 100vh;
                }
                .questions-container button {
                    animation: button-delay 1s ease 3s forwards;
                }
                .questions-container button:disabled {
                    background: rgba(67, 56, 202, 50%);
                }

                @keyframes button-delay {
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}

function Question({ data, answers, indexArr, onClick }) {
    return (
        <>
            <h2 className="mb-6 text-2xl text-indigo-900 font-semibold">
                {data.question}
            </h2>

            <ul className="flex flex-wrap">
                {answers.map((ans) => {
                    return (
                        <li
                            key={nanoid()}
                            onClick={() => onClick(ans.id, indexArr)}
                            className={`mr-4 mb-4 px-4 py-1 ${
                                ans.selected
                                    ? "bg-indigo-300 border-transparent"
                                    : ""
                            } border-2 border-indigo-900 rounded-2xl text-indigo-900 cursor-pointer transition-all hover:bg-indigo-300 hover:border-transparent`}
                        >
                            {ans.text}
                        </li>
                    );
                })}
            </ul>

            <hr className="mb-6" />
        </>
    );
}
