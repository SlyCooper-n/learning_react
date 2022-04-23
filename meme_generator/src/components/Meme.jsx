import { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
    const [meme, setMeme] = useState({
            topText: "",
            bottomText: "",
            randomImg: "",
        }),
        [allMemeData, setAllMemeData] = useState(memeData);

    function getMeme() {
        const num = Math.floor(Math.random() * memeData.data.memes.length),
            { url } = memeData.data.memes[num];

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImg: url,
        }));
    }

    return (
        <main className="w-1/2 mx-auto">
            <div className="w-full mx-auto py-16 grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Top text"
                    className="p-2 border border-neutral-300 rounded-sm"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="p-2 border border-neutral-300 rounded-sm"
                />

                <button
                    onClick={getMeme}
                    className="py-2 col-start-1 col-end-3 bg-gradient-to-r from-amber-700 to-amber-500 text-slate-50 font-semibold rounded-sm"
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <img src={meme.randomImg} alt="alg" className="mx-auto" />
        </main>
    );
}
