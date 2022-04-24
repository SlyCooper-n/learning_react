import React from "react";

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
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
                    Note {index + 1}
                </h4>
            </div>
        </div>
    ));

    return (
        <section className="w-1/5 p-3 overflow-y-auto">
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
    );
}
