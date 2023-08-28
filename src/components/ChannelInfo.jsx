import React from 'react';
import { getChannelThumbnail, getFakeChannelThumbnail } from '../api/channelAPI';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ channelId, name }) {
  // const { data:url, isLoading, error } = useQuery(['channels', channelId], () => getChannelThumbnail(channelId));
  const { data:url, isLoading, error } = useQuery(['channel', channelId], () => getFakeChannelThumbnail(channelId));

  return (
    <div className='flex h-12 mt-4'>
      <img
        src={url}
        alt={`${name}의 채널 이미지`}
        className='w-12 h-12 rounded-full'
      />
      <p className='text-lg leading-[48px] ml-2'>{name}</p>
    </div>
  );
}

