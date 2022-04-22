import trollFace from "../Troll-Face.png";

export default function Navbar() {
    return (
        <nav className="p-8 flex justify-between items-center bg-gradient-to-r from-amber-700 to-amber-500 text-slate-100">
            <div className="w-12 mr-4">
                <img src={trollFace} alt="troll face" className="w-full" />
            </div>

            <h1 className="mr-auto text-4xl font-semibold">Meme Generator</h1>

            <h2 className="font-semibold">React Course - Project 3</h2>
        </nav>
    );
}
