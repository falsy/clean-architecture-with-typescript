import CryptoJS from "crypto-js"
import IUserInfoVO from "domains/vos/interfaces/IUserInfoVO"
import ICommentVM, { ICommentVMParams } from "./interfaces/ICommentVM"

export default class CommentVM implements ICommentVM {
  readonly id: string
  key: string
  readonly postId: string
  readonly author: IUserInfoVO
  content: string
  readonly createdAt: Date
  updatedAt: Date

  constructor(parmas: ICommentVMParams) {
    this.id = parmas.id
    this.postId = parmas.postId
    this.author = parmas.author
    this.content = parmas.content
    this.createdAt = parmas.createdAt
    this.updatedAt = parmas.updatedAt
    this.key = this.generateKey(this.id, this.updatedAt)
  }

  updateContent(content: string): void {
    this.content = content
    this.key = this.generateKey(this.id)
  }

  applyUpdatedAt(date: Date): void {
    this.updatedAt = date
    this.key = this.generateKey(this.id)
  }

  private generateKey(id: string, updatedAt: Date = new Date()): string {
    const base = `${id}-${updatedAt.getTime()}`
    return CryptoJS.MD5(base).toString()
  }
}
