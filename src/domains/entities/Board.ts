import { BoardData } from '@interfaces/entities/board';

export default class Board {
  readonly id: number;
  readonly author: string;
  readonly content: string;
  readonly createAt: number;

  constructor(param: BoardData) {
    this.id = param.id;
    this.author = param.author;
    this.content = param.content;
    this.createAt = param.createAt;
  }
}