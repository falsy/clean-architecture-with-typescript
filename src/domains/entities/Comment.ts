import { ICommentEntity, ICommentData } from '@domains/entities/interfaces/iComment'

class Comment implements ICommentEntity { 

  private readonly _id: number
  private readonly _boardId: number
  private readonly _author: string
  private readonly _content: string
  private readonly _createdAt: Date

  constructor(params: ICommentData) {
    this._id = params.id
    this._boardId = params.boardId
    this._author = params.author
    this._content = params.content
    this._createdAt = params.createAt
  }

  get id() {
    return this._id
  }

  get boardId() {
    return this._boardId
  }

  get author() {
    return this._author
  }

  get content() {
    return this._content
  }

  get createAt() {
    return this._createdAt
  }
}

export default Comment