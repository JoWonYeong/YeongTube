import React from 'react';

export default function Loading() {
  return (
    <div className='relative h-[calc(100vh-208px)]'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className='animate-spin w-28 h-28 rounded-full border-8  border-t-8 border-t-logo-red'></div>
      </div>
    </div>
  );
}

