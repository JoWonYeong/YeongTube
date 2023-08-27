import React, { useEffect, useState } from 'react';

export default function VideoCard({item, index}) {
  // 필요한 정보
  // 썸네일 : thumbnails {default(120*90), medium(320*180), high(480*360), standard(640*480), maxres(1280*720)} - url, width, height
  // 제목 : title
  // 채널명 : channelTitle
  // 올린날짜 : publishedAt

  const getPadding = (index) => {
    if (window.innerWidth >= 1280) {
      return index % 5 === 4 ? '' : 'sm:pr-0 md:pr-0 lg:pr-0 xl:pr-4';
    } else if (window.innerWidth >= 1024) {
      return index % 4 === 3 ? '' : 'sm:pr-0 md:pr-0 lg:pr-4 xl:pr-0';
    } else if (window.innerWidth >= 768) {
      return index % 3 === 2 ? '' : 'sm:pr-0 md:pr-4 lg:pr-0 xl:pr-0';
    } else if (window.innerWidth >= 640) {
      return index % 2 === 1 ? '' : 'sm:pr-4 md:pr-0 lg:pr-0 xl:pr-0';
    } else {
      return ''; 
    }
  };
  
  const [paddingRight, setPaddingRight] = useState(getPadding(index));

  const handleResize = () => {
    setPaddingRight(getPadding(index));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트되거나 리사이클될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <li className={`inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-60 cursor-pointer overflow-hidden ${paddingRight}`}>
      <img
        src={item.snippet.thumbnails.default.url}
        alt=''
        className='w-full'
      />
      <h2>{item.snippet.title}</h2>
      <div>{item.snippet.channelTitle}</div>
      <time dateTime={item.snippet.publishedAt}>
        {item.snippet.publishedAt}
      </time>
    </li>
  );
}

