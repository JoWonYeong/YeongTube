import React from 'react';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ url, name }) {

  return (
    <div className='flex h-12 mt-4 items-center'>
      <img
        src={url}
        alt={`${name}의 채널 이미지`}
        className='w-12 h-12 rounded-full'
      />
      <p className='text-lg ml-2'>{name}</p>
    </div>
  );
}

