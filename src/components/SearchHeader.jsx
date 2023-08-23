import React, { useState } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'

export default function SearchHeader() {
  let navigate = useNavigate();
  let [search, setSearch] = useState('')

  const onClickLogo = ()=>{
    navigate('videos/');
    setSearch('');
  }
  

  return (
    <div className='h-14 flex items-end mb-3'>
      <div
        className='inline-block w-2/12 sm:w-1/5 sm:h-9 lg:h-10 cursor-pointer text-center'
        onClick={onClickLogo}>
        <AiFillYoutube className='align-bottom inline-block text-logo-red text-4xl sm:text-2xl lg:text-3xl' />
        <h1 className='hidden font-semibold sm:inline-block sm:text-lg lg:text-3xl'>
          YeongTube
        </h1>
      </div>

      <div className='w-10/12 sm:w-4/5 text-md lg:text-lg'>
        <input
          className='w-10/12 h-9 rounded-lg border-solid border-2 border-grey-100 outline-none'
          type='text'
          placeholder='검색어를 입력해 주세요'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button
          className='w-2/12 sm:w-14 h-9 px-4'
          onClick={() => {
            navigate(`videos/${search}`);
          }}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

