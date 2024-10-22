import { CommentRepository, PostRepository, UserRepository } from "adapters"
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
