import React from "react";

export default function Sidebar(props) {
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                className={`w-full flex justify-between items-center rounded-sm overflow-hidden cursor-pointer ${
                    note.id === props.currentNote.id
                        ? "bg-slate-700 text-slate-100"
                        : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="p-3 whitespace-nowrap text-ellipsis overflow-hidden">
                    {note.body.split("\n")[0]}
                </h4>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                    className="w-8 mr-2 p-2 hidden hover:bg-slate-400 rounded-full"
                    onClick={(event) => props.delete(event, note.id)}
                >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
            </div>
        </div>
    ));

    return (
        <>
            <section className="w-1/5 h-screen p-3 overflow-y-auto">
                <div className="mb-4 flex justify-around items-center">
                    <h2 className="text-3xl font-semibold">Notes</h2>
                    <button
                        className="w-8 h-8 ml-2 bg-slate-700 rounded-md text-slate-100 cursor-pointer"
                        onClick={props.newNote}
                    >
                        +
                    </button>
                </div>
                {noteElements}
            </section>

            <style jsx>{`
                div.w-full:hover > svg {
                    display: block;
                }
            `}</style>
        </>
    );
}
