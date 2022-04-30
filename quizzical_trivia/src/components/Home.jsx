import blob from "../public/img/blob5.jpg";
import blobs from "../public/img/blobs.jpg";

export default function Home(props) {
    return (
        <div className="homepage h-screen flex flex-col justify-center items-center text-slate-700">
            <img
                src={blob}
                alt="blob"
                className="absolute w-72 top-0 right-0"
            />
            <img
                src={blobs}
                alt="blobs"
                className="absolute w-72 bottom-0 left-0"
            />

            <h1 className="text-7xl font-bold">Quizzical</h1>

            <h2 className="my-8 text-xl font-semibold">
                Test your technology knowledge here
            </h2>

            <button
                onClick={() => props.onClick()}
                className="px-8 py-2 bg-indigo-700 rounded-md font-semibold text-slate-100"
            >
                Start quiz
            </button>
        </div>
    );
}
