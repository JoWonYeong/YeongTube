import React from 'react';

export default function VideoCard({item}) {
  return (
    <li>
      {item.snippet.title}
    </li>
  );
}

