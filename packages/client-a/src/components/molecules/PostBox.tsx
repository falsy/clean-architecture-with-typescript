import { Link } from "react-router"
import IPost from "domains/aggregates/interfaces/IPost"
import Button from "../atoms/Button"

export default function PostBox({
  post,
  deletePost
}: {
  post: IPost
  deletePost: (id: string) => void
}) {
  const { id, title } = post

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-6 w-full">
        <p>
          <span className="text-gray-400">Title: </span>
          <Link to={`/posts/${id}`} className="hover:text-blue-700">
            {title}
          </Link>
        </p>
        <p>
          <Button text="Delete" onClick={() => deletePost(id)} />
        </p>
      </div>
    </div>
  )
}
