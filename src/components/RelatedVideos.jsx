import React from 'react';
import VideoCard from './VideoCard'

export default function RelatedVideos({videoId, relatedVideos}) {
  // 연관비디오 - 해당 채널이 올린 다른 비디오들 보여줌  
  
  return (
    <>
      {/* 연관된 비디오 */}
      {relatedVideos && (
        <ul className='md:m-2'>
          { relatedVideos.map((item, index) => {
            if(videoId!==item.id) return <VideoCard key={item.id} video={item} type='list' related={true} />
          })}
        </ul>
      )}
    </>
  );
}

