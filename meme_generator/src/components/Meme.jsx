export default function Meme() {
    return (
        <main>
            <form
                action=""
                className="w-1/2 py-16 mx-auto grid grid-cols-2 gap-4"
            >
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

                <button className="py-2 col-start-1 col-end-3 bg-gradient-to-r from-amber-700 to-amber-500 text-slate-50 font-semibold rounded-sm">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    );
}
