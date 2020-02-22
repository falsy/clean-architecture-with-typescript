import { ICommentEntity } from "./comment";

export interface IBoardEntity {
  id: number;
  author: string;
  content: string;
  createAt: Date;
  comments: Array<ICommentEntity>; 
}

export interface IBoardData {
  id: number;
  author: string;
  content: string;
  createAt: Date;
}