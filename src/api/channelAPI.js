import axios from 'axios';
import httpClient from './APIsetting';

export const getChannelThumbnail = async (channelId) => {
  return httpClient
    .get('channels', {
      params: {
        part: 'snippet',
        id: channelId,
      },
    })
    .then((res) => res.data.items[0].snippet.thumbnails.default.url);
};

export const getRelatedVideos = async (channelId) => {
  return httpClient
    .get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        channelId: channelId,
        type: 'video',
      },
    })
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
};

export const getFakeChannelThumbnail = async () => {
  console.log('썸네일 호출');
  
  return axios
    .get('/videos/channel.json')
    .then((res) => res.data.items[0].snippet.thumbnails.default.url);
};

export const getFakeRelatedVideos = async () => {
  console.log('연관비디오 호출');
  return axios
    .get('/videos/related.json')
    .then((res) => res.data.items)
    .then((items)=>items.map((item)=>({...item, id:item.id.videoId})));
};