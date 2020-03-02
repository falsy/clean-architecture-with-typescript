import { ICommentEntity } from "./comment";

export interface IBoardEntity {
  id: number;
  author: string;
  content: string;
  createAt: Date;
  comments: Array<ICommentEntity>;
  pushComment(commentList: Array<ICommentEntity>): this;
}

export interface IBoardData {
  id: number;
  author: string;
  content: string;
  createAt: Date;
}

export interface ICommentData {
  id: number;

}