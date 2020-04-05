import { ICommentEntity } from "@interfaces/entities/comment";

export interface IBoardVM {
  id: number;
  author: string;
  content: string;
  createAt: Date;
  comments: Array<ICommentEntity>;
}