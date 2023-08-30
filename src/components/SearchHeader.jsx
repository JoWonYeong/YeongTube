import React, { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs'

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();  
  const [search, setSearch] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`videos/${search}/`);
  }

  useEffect(()=>setSearch(keyword||''),[keyword])

  return (
    <header className='fixed top-0 left-0 right-0 h-16 flex justify-center items-end pb-3 border-b-2 border-gray-200 bg-white z-10'>
      <div
        className='inline-block w-1/6 sm:w-1/5 md:w-1/6 sm:h-9 lg:h-10 cursor-pointer text-center xl:text-right xl:pr-4 2xl:pr-8'
        onClick={() => {
          navigate('/videos');
        }}>
        <AiFillYoutube className='align-bottom inline-block text-logo-red text-4xl sm:text-2xl lg:text-3xl xl:text-4xl' />
        <h1 className='hidden font-semibold sm:inline-block sm:text-lg lg:text-2xl'>
          YeongTube
        </h1>
      </div>

      <div className='w-5/6 sm:w-4/6 text-md lg:text-lg'>
        <form onSubmit={handleSubmit}>
          <input
            className='w-5/6 h-9 rounded-l-lg text-sm lg:text-base border-solid border-2 border-gray-200 outline-none'
            type='text'
            placeholder='검색어를 입력해 주세요'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <button className='align-bottom rounded-r-lg bg-gray-200 w-1/6 sm:w-14 h-9 px-4'>
            <BsSearch className='text-info-gray' />
          </button>
        </form>
      </div>
    </header>
  );
}

