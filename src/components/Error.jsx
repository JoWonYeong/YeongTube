import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Error() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    // 96px = header(64px) + defaultPage padding(32px)
    <div className='relative h-[calc(100vh-96px)]'>
      <div className='absolute left-1/2 top-[calc(50%-32px)] -translate-x-1/2 -translate-y-1/2 '>
        <div className={`text-center text-lg font-semibold ${darkMode?'':'text-dark-bg-gray'}`}>오류가 발생했습니다! <br /> 재시도 해주세요</div>
      </div>
    </div>
  );
}

