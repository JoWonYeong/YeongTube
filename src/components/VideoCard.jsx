import { Link } from "react-router-dom";
import decodeHTMLEntities from "../util/decodeHTMLEntities";

export default function VideoCard({ video }) {  
  // 필요한 정보
  // 썸네일 : thumbnails {medium(320*180) maxres(1280*720)} - url, width, height
  // 제목 : title
  // 채널명 : channelTitle
  // 올린날짜 : publishedAt
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const decodedTitle = decodeHTMLEntities(title);
  const decodedChannelTitle = decodeHTMLEntities(channelTitle);
  

  const calcTimeDiff = (inputTime) => {
    const currentTime = new Date();
    const uploadTime = new Date(inputTime);
    const timeDiff = currentTime - uploadTime;

    // 각 단위별로 ms 값 지정
    const msInMinute = 60000;
    const msInHour = 3600000;
    const msInDay = 86400000;
    const msInWeek = 604800000;
    const msInMonth = 2592000000;
    const msInYear = 31536000000;

    // 차이가 한시간보다 적다면
    if (timeDiff < msInHour) {
      // 몇분전
      return `${Math.floor(timeDiff / msInMinute)}분 전`;
    }
    // 차이가 24시간보다 적다면
    else if (timeDiff < msInHour * 24) {
      // 몇시간 전
      return `${Math.floor(timeDiff / msInHour)}시간 전`;
    }
    // 차이가 7일보다 적다면
    else if (timeDiff < msInDay * 7) {
      // 며칠 전
      return `${Math.floor(timeDiff / msInDay)}일 전`;
    }
    // 차이가 30일보다 적다면
    else if (timeDiff < msInMonth) {
      // 몇주 전
      return `${Math.floor(timeDiff / msInWeek)}주 전`;
    }
    // 차이가 12개월보다 적다면
    else if (timeDiff < msInYear) {
      // 몇달 전
      return `${Math.floor(timeDiff / msInMonth)}달 전`; 
    }
    // 그 이상 몇년 전
    else {
      return `${Math.floor(timeDiff / msInYear)}년 전`;
    }
  };

  return (
    <Link to={`/videos/watch/${video.id}`}>
      <li
        className={`inline-block w-full sm:aspect-[290/255] md:aspect-[232/225] lg:aspect-[232/220] xl:aspect-[197/200] 2xl:aspect-[234/225] cursor-pointer overflow-hidden `}>
        <picture>
          <source media='(max-width: 640px)' srcSet={thumbnails.maxres?.url || thumbnails.medium.url} />
          <img src={thumbnails.medium.url} alt='' className='w-full rounded' />
        </picture>
        <h2 className='line-clamp-2 text-base font-semibold'>{decodedTitle}</h2>
        <div className='truncate text-info-gray text-sm'>{decodedChannelTitle}</div>
        <time dateTime={publishedAt} className='text-info-gray text-sm'>
          {calcTimeDiff(publishedAt)}
        </time>
      </li>
    </Link>
  );
}
