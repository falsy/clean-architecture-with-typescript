import { ICommentEntity } from "./comment";

export interface IBoardEntity {
  id: number;
  author: string;
  content: string;
  createAt: Date;
  comments: Array<ICommentEntity>;
  pushComment: ICommentEntity;
}

export interface IBoardData {
  id: number;
  author: string;
  content: string;
  createAt: Date;
}