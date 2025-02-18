import CryptoJS from "crypto-js"
import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"
import IPostVM, { IPostVMParams } from "./interfaces/IPostVM"
import ICommentVM from "./interfaces/ICommentVM"
import CommentVM from "./CommentVM"

export default class PostVM implements IPostVM {
  readonly id: string
  key: string
  title: string
  content: string
  readonly author: IUserInfoVO
  comments: ICommentVM[]
  readonly createdAt: Date
  updatedAt: Date

  constructor(params: IPostVMParams) {
    this.id = params.id
    this.title = params.title
    this.content = params.content
    this.author = params.author
    this.comments = params.comments.map((comment) => new CommentVM(comment))
    this.createdAt = params.createdAt
    this.updatedAt = params.updatedAt
    this.key = this.generateKey(this.id, this.updatedAt)
  }

  updateTitle(title: string): void {
    this.title = title
    this.key = this.generateKey(this.id)
  }

  updateContent(content: string): void {
    this.content = content
    this.key = this.generateKey(this.id)
  }

  applyUpdatedAt(date: Date): void {
    this.updatedAt = date
    this.key = this.generateKey(this.id)
  }

  deleteComment(commentId: string): void {
    this.comments = this.comments.filter((comment) => comment.id !== commentId)
    this.key = this.generateKey(this.id)
  }

  private generateKey(id: string, updatedAt: Date = new Date()): string {
    const base = `${id}-${updatedAt.getTime()}`
    return CryptoJS.MD5(base).toString()
  }
}
