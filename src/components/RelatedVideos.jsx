import React from 'react';
// import { getFakeRelatedVideos, getRelatedVideos } from '../api/channelAPI';
import { getRelatedVideos } from '../api/channelAPI';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard'

export default function RelatedVideos({channelId}) {
  // 연관비디오 - 해당 채널이 올린 다른 비디오들 보여줌
  // const {data:videos } = useQuery(['videos', 'related', channelId], ()=>getFakeRelatedVideos())
  const {data:videos} = useQuery(['videos', 'related', channelId], ()=>getRelatedVideos(channelId))
  
    // if (isLoading) return <Loading />;
    // if (error) return <Error />;
  
  
  return (
    <>
    {/* 연관된 비디오 */}
      {videos && (
        <ul className='m-2'>
          {videos.map((item, index) => 
              <VideoCard key={item.id} video={item} type='list' related={true}/>
          )}
        </ul>
      )}
    </>
  );
}

