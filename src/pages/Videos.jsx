import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useQuery } from '@tanstack/react-query';
// import { homeReq, homeFakeReq } from '../api/homeAPI';
import { homeReq } from '../api/homeAPI';
import Loading from './../components/Loading'
import Error from './../components/Error'

export default function Videos() {
  const {keyword} = useParams();
  const { data:videos, isLoading, error } = useQuery(['videos', keyword], ()=> homeReq(keyword),{staleTime: 1000*60,});  
  // const { data: videos, isLoading, error } = useQuery(['videos', keyword], () => homeFakeReq(keyword),{staleTime: 1000*30,});  

  if(isLoading) return <Loading />
  if(error) return <Error />

  return (
    <section>
      {/* 기본홈 */}
      {videos && !keyword && (
        <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {videos.map(
            (item, index) =>
              <VideoCard key={item.id} video={item} />
          )}
        </ul>
      )}
      {/* 검색 시 */}
      {videos && keyword && (
        <ul>
          {videos.map(
            (item, index) =>
              <VideoCard key={item.id} video={item} type='list' related={false}/>
          )}
        </ul>
      )}
    </section>
  );
}

