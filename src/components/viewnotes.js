import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function ViewNotes() {
  const linkBtn = useRef();
  const toggleView = () => {
    linkBtn.current.style.display = 'none';
  };
  return (
    <div className='relative text-center m-10'>
      <Link
        ref={linkBtn}
        onClick={toggleView}
        to='/notes'
        className='px-2 py-4 bg-gray-900 text-white rounded-md shadow-lg'
      >
        View all notes
      </Link>
    </div>
  );
}

export default ViewNotes;
