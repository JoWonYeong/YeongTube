// > 비디오 상세 페이지
// > url : videos/watch/:videoId
// > 태그
// 비디오플레이어
// 타이틀
// 채널프사(검색결과의 데이터에는 채널이름은 잇으나 채널이미지 없는데 어떻게 받아올지 (useQuery사용하셈)) + 채널이름
// 비디오정보
// 오른쪽 연관된 비디오
// 댓글 (댓글프사, 댓글채널명, 댓글내용)

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getFakeVideoDetail, getVideoDetail } from "../api/videoDetailAPI";
import Loading from './../components/Loading'
import Error from './../components/Error'
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import decodeHTMLEntities from "../util/decodeHTMLEntities";
// import {ReactComponent as Folding} from '../icon/folding.svg'
import folding from '../icon/folding.svg'

export default function VideoDetail() {
  const {videoId} = useParams();
  const {data:video, isLoading, error} = useQuery(['video', videoId],()=>getFakeVideoDetail())
  // const {data:video, isLoading, error} = useQuery(['video', videoId],()=>getVideoDetail(videoId))
  const [open, setOpen] = useState(false)
  const [descStyle, setDescStyle] = useState('line-clamp-5');
  const [labelStyle, setLabelStyle] = useState('');
  const handleOpen = () => {
    setOpen((prev)=>!prev) 
  } 

  useEffect(() => {
    setDescStyle(open ? '' : 'line-clamp-5 pb-0 md:pb-0');
    setLabelStyle(open?'rotate-180' : '')
  }, [open]);

  if(isLoading) return <Loading />
  if(error) return <Error />


  return (
    <section className='lg:flex'>
      <article className='w-full lg:w-8/12 '>
        <iframe
          title={video.snippet.title}
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1`}
        />
        <div className='w-full md:p-2'>
          <h2 className='text-xl font-semibold mt-2'>
            {decodeHTMLEntities(video.snippet.title)}
          </h2>
          <ChannelInfo
            channelId={video.snippet.channelId}
            name={decodeHTMLEntities(video.snippet.channelTitle)}
          />
          <pre className={`whitespace-pre-wrap break-all relative mt-4 text-sm lg:text-base bg-gray-200 p-2 md:p-4 rounded-lg ${descStyle} duration-200`}>
            <button className='absolute right-1 top-1 md:right-2 md:top-2'>
              <label htmlFor='folding' className={`inline-block w-8 h-8 cursor-pointer bg-folding bg-no-repeat bg-center ${labelStyle} duration-300`} >
                <input type='checkbox' id='folding' aria-label="더보기 버튼" onChange={handleOpen} checked={open} className="opacity-0 w-0 h-0"/>
              </label>
            </button>
            {video.snippet.description}
          </pre>
        </div>
      </article>
      <section className='w-full lg:w-4/12 '>
        <RelatedVideos channelId={video.snippet.channelId} />
      </section>
    </section>
  );
}