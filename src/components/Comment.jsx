import React from 'react';
import calcTimeDiff from '../util/calcTimeDiff';

export default function Comment({comment}) {
  const {authorProfileImageUrl:url, authorDisplayName:name, publishedAt, textOriginal:contents} = comment;  
  
  return (
    <li className='flex mt-4 px-2'>
      <img src={url} alt='' className='w-11 h-11 rounded-full mr-3' />
      <div>
        <p className='inline-block text-sm font-semibold'>{name}</p>
        <time dateTime={publishedAt} className='text-info-gray text-xs ml-2'>
          {calcTimeDiff(publishedAt)}
        </time>
        <p className='text-sm mt-1'>{contents}</p>
      </div>
    </li>
  );
}

