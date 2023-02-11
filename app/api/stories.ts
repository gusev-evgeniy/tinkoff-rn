import axios from 'axios';
import { StoryType } from '../types/story';

export const StoriesAPI = {
  async get(count = 10) {
    return await axios.get<StoryType[]>(`https://picsum.photos/v2/list?page=30&limit=${count}`);
  },
};
