import { useEffect, useState } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
            topText: "",
            bottomText: "",
            randomImg: "",
            name: "",
        }),
        [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((res) => {
                setAllMemes(res.data.memes);
            });
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    function getMeme() {
        const num = Math.floor(Math.random() * allMemes.length),
            { url, name } = allMemes[num];

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImg: url,
            name: name,
        }));
    }

    return (
        <main className="w-1/2 mx-auto">
            <div className="w-full mx-auto py-16 grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    className="p-2 border border-neutral-300 rounded-sm"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    className="p-2 border border-neutral-300 rounded-sm"
                />

                <button
                    onClick={getMeme}
                    className="py-2 col-start-1 col-end-3 bg-gradient-to-r from-amber-700 to-amber-500 text-slate-50 font-semibold rounded-sm"
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="relative">
                <h2 className="absolute text-5xl text-slate-100 font-semibold top-2 left-1/2 -translate-x-1/2">
                    {meme.topText.toUpperCase()}
                </h2>

                <img src={meme.randomImg} alt={meme.name} className="mx-auto" />

                <h2 className="absolute text-5xl text-slate-100 font-semibold bottom-2 left-1/2 -translate-x-1/2">
                    {meme.bottomText.toUpperCase()}
                </h2>
            </div>
        </main>
    );
}
