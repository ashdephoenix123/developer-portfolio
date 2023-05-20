'use client';

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = ({getSearchResults}) => {
    const [search, setSearch] = useState('');
    const changeSearchInput = (e) => {
        const { value } = e.target;
        setSearch(value);
    }
    const submitSearch = async (e) => {
        e.preventDefault();
        const searchQuery = await fetch(`/api/blogs/blog?search=${search}`);
        const searchResult = await searchQuery.json();
        getSearchResults(searchResult);
    }
    return (
        <form onSubmit={submitSearch} className='flex items-center relative rounded overflow-hidden shadow-md max-[403px]:-order-1'>
            <input type="text" name='search' value={search} onChange={changeSearchInput} placeholder='Search in Blogs...' className='border border-zinc-500 rounded px-1.5 py-1.5 text-sm dark:text-gray-300 dark:outline-none max-[403px]:w-full w-[200px] focus:outline-purple-600  text-gray-700' />
            <button className='absolute right-0 h-full px-2 outline outline-1 focus:text-purple-500'>
                <AiOutlineSearch className=' hover:text-purple-500' size={20} />
            </button>
        </form>
    )
}

export default Search
