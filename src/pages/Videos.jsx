import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  let {keyword} = useParams();  

  return (
    <>
      Videos
      {
        keyword?<span>🔍{keyword}🔍</span>:<span>🔥핫트렌드🔥</span>
      }
    </>
  );
}

