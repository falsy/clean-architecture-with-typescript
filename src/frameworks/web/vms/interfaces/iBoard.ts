import { ICommentEntity } from "@domains/entities/interfaces/iComment";

export interface IBoardVM {
  id: number;
  author: string;
  content: string;
  createAt: Date;
  comments: Array<ICommentEntity>;
}