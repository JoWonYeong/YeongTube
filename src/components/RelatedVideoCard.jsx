import React from 'react';
import { Link } from 'react-router-dom';
import decodeHTMLEntities from '../util/decodeHTMLEntities';
import calcTimeDiff from '../util/calcTimeDiff';

export default function RelatedVideoCard({video}) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const decodedTitle = decodeHTMLEntities(title);
  const decodedChannelTitle = decodeHTMLEntities(channelTitle);
  
  return (
    <Link to={`/videos/watch/${video.id}`}>
      <li className='m-2 flex'>
        <img src={thumbnails.medium.url} alt='' className='w-2/5 rounded' />
        <div className='w-3/5 p-2 '>
          <h2 className='line-clamp-2 text-sm font-semibold'>{decodedTitle}</h2>
          <p className='truncate text-info-gray text-sm'>{decodedChannelTitle}</p>
          <time dateTime={publishedAt} className='text-info-gray text-sm'>
            {calcTimeDiff(publishedAt)}
          </time>
        </div>
      </li>
    </Link>
  );
}

