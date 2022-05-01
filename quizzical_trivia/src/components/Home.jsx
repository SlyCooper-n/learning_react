import { useState } from "react";
import blob from "../public/img/blob5.jpg";
import blobs from "../public/img/blobs.jpg";

export default function Home(props) {
    const [formData, setFormData] = useState({
        number_questions: 5,
        category: "",
        difficulty: "",
        type: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (formData.number_questions > 13) {
            alert("Number of questions limited to 13");
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    number_questions: 13,
                };
            });
            return;
        }

        const { number_questions, category, difficulty, type } = formData;

        const requestURL = `https://opentdb.com/api.php?amount=${number_questions}${
            category ? `&category=${category}` : ""
        }${difficulty ? `&difficulty=${difficulty}` : ""}${
            type ? `&type=${type}` : ""
        }`;

        sessionStorage.setItem("reqURL", requestURL);
        props.onClick();
    }

    return (
        <div className="homepage relative h-screen flex flex-col justify-center items-center text-slate-700">
            <img
                src={blob}
                alt="blob"
                className="absolute w-72 top-0 right-0 z-0"
            />
            <img
                src={blobs}
                alt="blobs"
                className="absolute w-72 bottom-0 left-0 z-0"
            />

            <h1 className="text-7xl font-bold z-10">Quizzical</h1>

            <h2 className="my-8 text-xl font-semibold z-10">
                Test if you are a wise person.
            </h2>

            <form className="mb-4 font-semibold z-10">
                <label className="mb-4 block">
                    Number of Questions: <br />
                    <input
                        type="number"
                        max={13}
                        name="number_questions"
                        value={formData.number_questions}
                        onChange={handleChange}
                        className="w-full p-2 bg-slate-200 focus:shadow-lg rounded-md outline-none transition-all"
                    />
                </label>

                <label className="block mb-4">
                    Select Category: <br />
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 bg-slate-200 focus:shadow-lg rounded-md outline-none"
                    >
                        <option value="">Any</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">
                            Entertainment: Musicals &amp; Theatres
                        </option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">
                            Entertainment: Japanese Anime &amp; Manga
                        </option>
                        <option value="32">
                            Entertainment: Cartoon &amp; Animations
                        </option>
                    </select>
                </label>

                <label className="block mb-4">
                    Select Difficulty: <br />
                    <select
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                        className="w-full p-2 bg-slate-200 focus:shadow-lg rounded-md outline-none"
                    >
                        <option value="">Any</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>

                <label className="block">
                    Select Type: <br />
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full p-2 bg-slate-200 focus:shadow-lg rounded-md outline-none"
                    >
                        <option value="">Any</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </select>
                </label>

                <style jsx>{`
                    input,
                    select {
                        font-weight: 500;
                    }
                `}</style>
            </form>

            <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-indigo-700 rounded-md font-semibold text-slate-100 z-10"
            >
                Start quiz
            </button>
        </div>
    );
}
