import React, { useRef } from 'react';
import { BsX } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import ViewNotes from './viewnotes';

function Notes({ notes, deleteNote }) {
  const viewBtn = useRef();
  const toggleView = () => {
    ViewNotes.style.display = 'block';
  };

  return (
    <div className='m-auto w-3/4'>
      <NavLink to='/' exact='true' ref={viewBtn} onClick={toggleView}>
        <div className='text-center my-4 px-2 py-4 bg-gray-900 text-white rounded-md shadow-lg'>
          Back to Notes
        </div>
      </NavLink>
      {notes.length ? (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center'>
          {notes.map((note) => {
            return (
              <div key={note.id}>
                <div className='flex justify-between items-center relative p-2 top-10'>
                  <h1 className='font-bold'>Note: {note.id}</h1>
                  <button
                    className='relative right-5 text-lg text-justify'
                    onClick={() => deleteNote(note.id)}
                  >
                    <BsX />
                  </button>
                </div>
                <div className='notes w-72 h-44 bg-yellow-400 rounded-xl overflow-auto'>
                  <p className='py-10 px-2'>{note.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className='text-center text-lg'>no notes available</h1>
      )}
    </div>
  );
}
export default Notes;
