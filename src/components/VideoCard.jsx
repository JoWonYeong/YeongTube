import { Link } from "react-router-dom";
import decodeHTMLEntities from "../util/decodeHTMLEntities";
import calcTimeDiff from "../util/calcTimeDiff";

export default function VideoCard({ video }) {  
  // 필요한 정보
  // 썸네일 : thumbnails {medium(320*180) maxres(1280*720)} - url, width, height
  // 제목 : title
  // 채널명 : channelTitle
  // 올린날짜 : publishedAt
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const decodedTitle = decodeHTMLEntities(title);
  const decodedChannelTitle = decodeHTMLEntities(channelTitle);

  return (
    <Link to={`/videos/watch/${video.id}`}>
      <li
        className={`inline-block w-full sm:aspect-[290/255] md:aspect-[232/225] lg:aspect-[232/220] xl:aspect-[197/200] 2xl:aspect-[234/225] cursor-pointer overflow-hidden `}>
        <picture>
          <source media='(max-width: 768px)' srcSet={thumbnails.maxres?.url || thumbnails.medium.url} />
          <img src={thumbnails.medium.url} alt='' className='w-full rounded' />
        </picture>
        <div>
          <h2 className='line-clamp-2 text-base font-semibold'>{decodedTitle}</h2>
          <p className='truncate text-info-gray text-sm'>{decodedChannelTitle}</p>
          <time dateTime={publishedAt} className='text-info-gray text-sm'>
            {calcTimeDiff(publishedAt)}
          </time>
        </div>
      </li>
    </Link>
  );
}