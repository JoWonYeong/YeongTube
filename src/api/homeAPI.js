import httpClient from './APIsetting';
import axios from 'axios';

export const homeReq = async (keyword) => {
  return keyword? searchByKeyword(keyword) : mostPopular();
}

const searchByKeyword = async (keyword) => {
  return httpClient
    .get('search', {
      params: {
        part: 'snippet',
        maxResults: '25',
        q: keyword,
        type : 'video',
      },
    })
    .then((res) => res.data.items)
    .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
}

const mostPopular = async () => {
  return httpClient
    .get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: '25',
      },
    })
    .then((res) => res.data.items);
}

export const homeFakeReq = async (keyword) => {
  console.log('홈 호출');
  return keyword? axios.get(`/videos/search.json`)
        .then((res) => res.data.items)
        .then((items) =>
          items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    : axios.get(`/videos/popular.json`).then((res) => res.data.items);
}