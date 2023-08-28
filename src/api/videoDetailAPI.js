import axios from "axios";
import httpClient from "./APIsetting";

export const getVideoDetail = async (videoId) => {
  return httpClient
    .get('videos', {
      params: {
        part: 'snippet',
        id: videoId,
      },
    })
    .then((res) => res.data.items[0]);
};

export const getFakeVideoDetail = async () => {
  return axios.get('/videos/videoInfo.json').then((res) => res.data.items[0]);
};