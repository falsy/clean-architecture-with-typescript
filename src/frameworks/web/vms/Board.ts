import { IBoardEntity } from '@interfaces/entities/board';
import { ICommentEntity } from '@interfaces/entities/comment';
import { IBoardVM } from '@interfaces/vms/board';

class BoardVM implements IBoardVM {
  private readonly _id: number;
  private readonly _author: string;
  private readonly _content: string;
  private readonly _createAt: Date;
  private _comments: Array<ICommentEntity>;

  constructor(params: IBoardEntity) {
    this._id = params.id;
    this._author = params.author;
    this._content = params.content;
    this._createAt = params.createAt;
    this._comments = params.comments;
  }

  get id() {
    return this._id;
  }

  get comments() {
    return this._comments;
  }

  get author() {
    return this._author;
  }

  get content() {
    return this._content;
  }

  get createAt() {
    return this._createAt;
  }
}

export default BoardVM;