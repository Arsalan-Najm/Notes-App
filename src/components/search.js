import React from 'react';
import { BsSearch } from 'react-icons/bs';

function Search({ setSearch }) {
  return (
    <div className='w-3/4 m-auto'>
      <BsSearch className='relative top-9 left-2 text-md' />
      <input
        className='w-full my-2 rounded-xl py-2 px-8 bg-gray-300 shadow-md'
        placeholder='Search Notes'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
export default Search;
