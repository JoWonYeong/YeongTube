import { Link } from "react-router-dom";
import decodeHTMLEntities from "../util/decodeHTMLEntities";
import calcTimeDiff from "../util/calcTimeDiff";

export default function VideoCard({ video, type, related }) {  
  // 필요한 정보
  // 썸네일 : thumbnails {medium(320*180) maxres(1280*720)} - url, width, height
  // 제목 : title
  // 채널명 : channelTitle
  // 올린날짜 : publishedAt  
  const { thumbnails, title, channelTitle, publishedAt, description, channelId } = video.snippet;
  const decodedTitle = decodeHTMLEntities(title);
  const decodedChannelTitle = decodeHTMLEntities(channelTitle);
  const cardStyleLi =
    type === 'list'
      ? `flex mt-2 ${!related &&'md:my-4'}`
      : 'inline-block w-full sm:aspect-[290/255] md:aspect-[232/225] lg:aspect-[232/220] xl:aspect-[197/200] 2xl:aspect-[234/225] overflow-hidden ';
  const cardStyleDiv = type === 'list' ? `w-3/5 ${!related &&'xl:w-3/4'} p-2` : '';

  return (
    <Link to={`/videos/watch/${video.id}`} state={{ channelId }}>
      <li className={`${cardStyleLi}`}>
        {type === 'list' ? <img src={thumbnails.medium.url} alt='' className={`w-2/5 ${!related &&'xl:w-1/4'} rounded`} /> : 
          <picture>
            <source media='(max-width: 768px)' srcSet={thumbnails.maxres?.url || thumbnails.medium.url} />
            <img src={thumbnails.medium.url} alt='' className={`rounded w-full`} />
          </picture>
        }

        <div className={`${cardStyleDiv}`}>
          <h2 className={`line-clamp-2 text-sm md:text-base ${related && 'md:text-sm'}  font-semibold`}>
            {decodedTitle}
          </h2>
          <p className='truncate text-info-gray text-sm'>
            {decodedChannelTitle}
          </p>
          <time dateTime={publishedAt} className='text-info-gray text-sm'>
            {calcTimeDiff(publishedAt)}
          </time>
          { type === 'list'&& !related && <pre className="hidden lg:block mt-4 whitespace-pre-wrap break-all text-info-gray text-sm overflow-hidden">{description}</pre>}
        </div>
      </li>
    </Link>
  );
}