import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { homeReq, homeFakeReq } from '../api/homeAPI';

export default function Videos() {
  const {keyword} = useParams();
  // const { data:videos, isLoading, error } = useQuery(['videos', keyword], ()=> homeReq(keyword))
  const { data:videos, isLoading, error } = useQuery(['videos', keyword], ()=> homeFakeReq(keyword))  

  return (
    <div className='mt-16 p-4'>
      {/* Videos
      {keyword ? <span>🔍{keyword}🔍</span> : <span>🔥핫트렌드🔥</span>} */}
      {isLoading && <div>로딩중</div>}
      {error && <div>에러</div>}
      {videos && (
        <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {videos.map((item, index) => (
            // 채널 요소는 item.id 값 undefined
            item.id && <VideoCard key={item.id} video={item.snippet} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

