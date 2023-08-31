// > 비디오 상세 페이지
// > url : videos/watch/:videoId
// > 태그
// 비디오플레이어
// 타이틀
// 채널프사(검색결과의 데이터에는 채널이름은 잇으나 채널이미지 없는데 어떻게 받아올지 (useQuery사용하셈)) + 채널이름
// 비디오정보
// 오른쪽 연관된 비디오
// 댓글 (댓글프사, 댓글채널명, 댓글내용)

import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { getFakeVideoDetail,getFakeComment, getVideoDetail, getComment } from "../api/videoDetailAPI";
import { getFakeRelatedVideos,getFakeChannelThumbnail,getChannelThumbnail, getRelatedVideos } from '../api/channelAPI';
// import { getVideoDetail, getComment } from "../api/videoDetailAPI";
// import { getChannelThumbnail, getRelatedVideos } from '../api/channelAPI';
import Loading from './../components/Loading'
import Error from './../components/Error'
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import decodeHTMLEntities from "../util/decodeHTMLEntities";
import Comment from "../components/Comment";
import { DarkModeContext } from "../context/DarkModeContext";

export default function VideoDetail() {
  const { videoId } = useParams();
  const location = useLocation();
  const {channelId} = location.state;  
  const {darkMode} = useContext(DarkModeContext)
  // const { data:video, isLoading, error} = useQuery(['video','detail', videoId],()=>getVideoDetail(videoId), {staleTime: 1000 * 60 * 5 })
  // const { data:comments } = useQuery(['comments', videoId],()=>getComment(videoId), {staleTime: 1000 * 5 })
  // const {data:relatedVideos} = useQuery(['videos', 'related', channelId], ()=>getRelatedVideos(channelId), {staleTime: 1000 * 60 *5 })
  // const { data:url } = useQuery(['channels', channelId], () => getChannelThumbnail(channelId),{staleTime: 1000 * 60 * 5 });
  const { data: video, isLoading, error} = useQuery(['video', 'detail', videoId], () => getFakeVideoDetail(videoId), {staleTime: 1000 * 60 *5 });
  const { data: comments } = useQuery(['comment', videoId], () => getFakeComment(videoId), { staleTime: 1000*5 });
  const { data:relatedVideos } = useQuery(['videos', 'related', channelId], ()=>getFakeRelatedVideos(channelId), {staleTime: 1000 * 60 *5})
  const { data:url } = useQuery(['channel', channelId], () => getFakeChannelThumbnail(channelId), {staleTime: 1000 * 60 *5});
  const [open, setOpen] = useState(false);
  const [descStyle, setDescStyle] = useState('line-clamp-5');
  const [labelStyle, setLabelStyle] = useState('');
  const [commentStyle, setCommentStyle] = useState('h-[64px]');
  const [isExpanded, setIsExpended] = useState(false)
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setDescStyle(open ? '' : 'line-clamp-3 pb-0 md:pb-0');
    setLabelStyle(open ? 'rotate-180' : '');
  }, [open]);  

  useEffect(() => {
    isExpanded?setCommentStyle('h-fit'):setCommentStyle('h-[64px]')
  }, [isExpanded]);  

  // useEffect(() => {
  //   console.log('==마운트=='); // 컴포넌트가 마운트될 때 콘솔 출력
  //   return () => {
  //     console.log('==언마운트=='); // 컴포넌트가 언마운트될 때 콘솔 출력
  //   };
  // }, []); // 빈 배열을 넣어 처음 마운트될 때만 실행되도록 함
  

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className='lg:flex'>
      <article className='w-full lg:w-8/12 '>
        <iframe
          title={video.snippet.title}
          id='player'
          type='text/html'
          width='100%'
          height='280px'
          src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
          className='sm:h-[480px] 2xl:h-[640px]'
        />
        <div className='w-full md:p-2'>
          <h2 className='text-xl font-semibold mt-2'>
            {decodeHTMLEntities(video.snippet.title)}
          </h2>
          <ChannelInfo
            url={url}
            name={decodeHTMLEntities(video.snippet.channelTitle)}
          />
          <pre
            className={`whitespace-pre-wrap break-all relative mt-4 text-sm lg:text-base ${darkMode?'bg-dark-bg-gray':'bg-bg-gray'} p-2 md:p-4 rounded-lg ${descStyle} duration-200`}>
            <button className='absolute right-2 top-1'>
              <label
                htmlFor='folding'
                className={` inline-block w-6 h-6 cursor-pointer bg-folding bg-no-repeat bg-center ${labelStyle} duration-300`}>
                <input
                  type='checkbox'
                  id='folding'
                  aria-label='더보기 버튼'
                  onChange={handleOpen}
                  checked={open}
                  className='opacity-0 w-0 h-0'
                />
              </label>
            </button>
            {video.snippet.description}
          </pre>
          <div className={` ${darkMode?'bg-dark-bg-gray':'bg-bg-gray'} rounded-lg mb-4 lg:bg-transparent`}>
            {comments && (
              <ul className={`w-full mt-4 overflow-hidden ${commentStyle} lg:h-fit`}>
                {comments.map((item, index) => (
                  <Comment key={index} comment={item} />
                ))}
              </ul>
            )}
            <button className={`w-full ${darkMode?'bg-info-gray':'bg-gray-200'} mt-4 rounded-b-lg text-base h-8 lg:hidden`} onClick={()=>{setIsExpended((prev)=>!prev)}}>
              {isExpanded?'댓글 접기':'댓글 더보기'}
            </button>
          </div>
        </div>
      </article>
      <section className='w-full lg:w-4/12 '>
        <RelatedVideos videoId={videoId} relatedVideos={relatedVideos} />
      </section>
    </section>
  );
}