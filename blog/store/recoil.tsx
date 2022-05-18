import { atom } from 'recoil';
import initPost from './posts.json';
export const postList = atom({
  key: 'postList',
  default: initPost.posts,
});

export const test = atom({
  key: 'test',
  default: 3,
});
