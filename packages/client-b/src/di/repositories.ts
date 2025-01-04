import UserRepository from "adapters/repositories/UserRepository"
import IRepositories from "./interfaces/IRepositories"
import ClientHTTP from "./ClientHTTP"
import CommentRepository from "../adpaters/repositories/CommentRepository"
import PostRepository from "../adpaters/repositories/PostRepository"

export default (baseUrl: string): IRepositories => {
  const clientHTTP = new ClientHTTP(baseUrl)
  return {
    post: new PostRepository(),
    comment: new CommentRepository(),
    user: new UserRepository(clientHTTP)
  }
}
