import PostRepository from "adapters/repositories/PostRepository"
import CommentRepository from "adapters/repositories/CommentRepository"
import UserRepository from "adapters/repositories/UserRepository"
import IRepositories from "./interfaces/IRepositories"
import ClientHTTP from "./ClientHTTP"

export default (baseUrl: string): IRepositories => {
  const clientHTTP = new ClientHTTP(baseUrl)
  return {
    post: new PostRepository(clientHTTP),
    comment: new CommentRepository(clientHTTP),
    user: new UserRepository(clientHTTP)
  }
}
