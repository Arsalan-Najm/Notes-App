import React, { useEffect, useState } from 'react';
import Notes from './components/notes';
import Input from './components/input';
import Search from './components/search';
import ViewNotes from './components/viewnotes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //saving data to local storage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return [];
    }
  });
  //runs the component whenever it mounts
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  const [search, setSearch] = useState('');
  //functions for adding and deleting notes
  const addNote = (content) => {
    let noteId = notes.length + 1;
    const newNote = [...notes, { id: noteId, content: content }];
    setNotes(newNote);
  };
  const deleteNote = (id) => {
    let newNote = [...notes];
    newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <Router>
      <Search setSearch={setSearch} />
      <Routes>
        <Route
          path='/notes'
          element={
            <Notes
              notes={notes.filter((note) =>
                note.content.toLowerCase().includes(search)
              )}
              deleteNote={deleteNote}
            />
          }
        ></Route>
        <Route
          path='/'
          exact='true'
          element={<Input addNote={addNote} />}
        ></Route>
      </Routes>
      <ViewNotes />
    </Router>
  );
}

export default App;
