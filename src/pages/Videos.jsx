import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useQuery } from '@tanstack/react-query';

export default function Videos() {
  const {keyword} = useParams();
  const { data:videos, isLoading, error } = useQuery(['videos', keyword], async()=>{
    return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res)=>res.json())
    .then((data)=>data.items)
  })
  console.log(videos);
  

  return (
    <>
      Videos
      {keyword ? <span>🔍{keyword}🔍</span> : <span>🔥핫트렌드🔥</span>}
      {isLoading && <div>로딩중</div>}
      {error && <div>에러</div>}
      {videos && (
        <ul>
          {videos.map((item, index) => ( <VideoCard key={index} item={item} /> ))}
        </ul>
      )}
    </>
  );
}

