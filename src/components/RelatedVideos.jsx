import React from 'react';
import RelatedVideoCard from './RelatedVideoCard';
import { getFakeRelatedVideos, getRelatedVideos } from '../api/channelAPI';
import { useQuery } from '@tanstack/react-query';

export default function RelatedVideos({channelId}) {
  // 연관비디오 - 해당 채널이 올린 다른 비디오들 보여줌
  const {data:videos, isLoading, error} = useQuery(['videos', 'related', channelId], ()=>getFakeRelatedVideos())
  // const {data:videos, isLoading, error} = useQuery(['videos', 'related', channelId], ()=>getRelatedVideos(channelId))
  
    // if (isLoading) return <Loading />;
    // if (error) return <Error />;
  
  
  return (
    <>
      {videos && (
        <ul className=''>
          {videos.map((item, index) => 
            item.id &&
            <RelatedVideoCard key={item.id} video={item} />
          )}
        </ul>
      )}
    </>
  );
}

