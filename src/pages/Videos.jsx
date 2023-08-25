import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { homeReq, homeFakeReq } from '../api/homeAPI';

export default function Videos() {
  // key: process.env.REACT_APP_YOUTUBE_API_KEY
  const {keyword} = useParams();
  // const { data:videos, isLoading, error } = useQuery(['videos', keyword], ()=> homeReq(keyword))
  const { data:videos, isLoading, error } = useQuery(['videos', keyword], ()=> homeFakeReq(keyword))
  console.log(videos);
  

  return (
    <>
      Videos
      {keyword ? <span>🔍{keyword}🔍</span> : <span>🔥핫트렌드🔥</span>}
      {isLoading && <div>로딩중</div>}
      {error && <div>에러</div>}
      {videos && (
        <ul>
          {videos.map((item, index) => ( <VideoCard key={item.id} item={item} /> ))}
        </ul>
      )}
    </>
  );
}

