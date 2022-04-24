import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
    const [notes, setNotes] = useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    );
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        setNotes((oldNotes) => {
            const newArr = [];

            oldNotes.forEach((note) => {
                if (note.id == currentNoteId) {
                    newArr.unshift({ ...note, body: text });
                } else {
                    newArr.push(note);
                }
            });

            return newArr;
        });
    }

    function findCurrentNote() {
        return (
            notes.find((note) => {
                return note.id === currentNoteId;
            }) || notes[0]
        );
    }

    function deleteNote(event, id) {
        event.stopPropagation();
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id != id);
        });
    }

    return (
        <main>
            {notes.length > 0 ? (
                <Split sizes={[30, 70]} direction="horizontal" className="flex">
                    <Sidebar
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        delete={deleteNote}
                    />
                    {currentNoteId && notes.length > 0 && (
                        <Editor
                            currentNote={findCurrentNote()}
                            updateNote={updateNote}
                        />
                    )}
                </Split>
            ) : (
                <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-100">
                    <h1>You have no notes</h1>

                    <button
                        className="p-4 bg-slate-700 rounded-sm text-slate-100 cursor-pointer"
                        onClick={createNewNote}
                    >
                        Create one now
                    </button>
                </div>
            )}
        </main>
    );
}
