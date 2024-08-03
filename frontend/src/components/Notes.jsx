import React, { useState, useEffect } from 'react';
import Nav from './Nav';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { id: Date.now(), text: noteText }]);
      setNoteText('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note => note.id === id ? { ...note, text: newText } : note));
    setEditingNote(null);
  };

  const startEditing = (note) => {
    setNoteText(note.text);
    setEditingNote(note);
  };

  return (
    <>
      <Nav />
      <div className="notes-app p-8 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl text-white font-bold mb-8">Note Taking App</h1>
        <div className="note-input mb-6 w-full max-w-md">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write your note here..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => editingNote ? editNote(editingNote.id, noteText) : addNote()}
            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {editingNote ? 'Update Note' : 'Add Note'}
          </button>
        </div>
        <div className="notes-list w-full max-w-md">
          {notes.map(note => (
            <div key={note.id} className="note-item mb-4 p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
              <p className="flex-1">{note.text}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEditing(note)}
                  className="py-1 px-3 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="py-1 px-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;