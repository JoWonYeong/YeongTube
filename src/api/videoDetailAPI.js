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

export const getComment = async(videoId) =>{
  return httpClient
    .get('commentThreads', {
      params: {
        part: 'snippet',
        videoId: videoId,
      },
    })
    .then((res) => res.data.items)
    .then((items) => items.map((item) => item.snippet.topLevelComment.snippet));
}

export const getFakeVideoDetail = async () => {
  return axios.get('/videos/videoInfo.json').then((res) => res.data.items[0]);
};

export const getFakeComment = async () => {
  return axios
    .get('/videos/comment.json')
    .then((res) => res.data.items)
    .then((items) => items.map((item) => (item.snippet.topLevelComment.snippet)));
};