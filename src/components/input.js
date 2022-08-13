import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

function Input({ addNote }) {
  const [input, setInput] = useState('');
  const limit = 200;
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(input);
    setInput('');
    addNote(input);
    alert('Note added to the list');
  };
  const handleChange = (e) => {
    if (limit - e.target.value.length >= 0) {
      setInput(e.target.value);
    }
  };
  return (
    <div className='App'>
      <div className='relative w-3/4 m-auto'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-3xl p-3'>Notes</h1>
          <button
            className='m-3 w-11 h-11 bg-gray-900 flex justify-center items-center rounded-full text-white text-xl'
            title='Add Note'
            onClick={handleSubmit}
          >
            <BsPlus />
          </button>
        </div>
        <div className='grid grid-cols-1'>
          <div className='bg-gray-900 w-full h-12 flex justify-between p-4 items-center'>
            <span className='text-sm text-white font-semibold md:text-lg'>
              Take a note!
            </span>
            <span className='text-sm  text-white md:text-lg'>
              {limit - input.length} / 200 Remaining
            </span>
          </div>
          <textarea
            cols={36}
            rows={6}
            value={input}
            onChange={handleChange}
            placeholder={'write down your notes!'}
            className='h-full focus:outline-0 pl-2 bg-yellow-300 p-1 rounded-b-lg shadow-lg resize-none'
          ></textarea>
        </div>
      </div>
    </div>
  );
}
export default Input;
