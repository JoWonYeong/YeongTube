import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { homeReq, homeFakeReq } from '../api/homeAPI';
import Loading from './../components/Loading'
import Error from './../components/Error'

export default function Videos() {
  const {keyword} = useParams();
  // const { data:videos, isLoading, error } = useQuery(['videos', keyword], ()=> homeReq(keyword))
  const { data: videos, isLoading, error } = useQuery(['videos', keyword], () => homeFakeReq(keyword));  

  if(isLoading) return <Loading />
  if(error) return <Error />

  return (
    <section>
      {videos && (
        <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {videos.map((item, index) => (
            // 채널 요소는 item.id 값 undefined
            item.id && 
            <VideoCard key={item.id} video={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

