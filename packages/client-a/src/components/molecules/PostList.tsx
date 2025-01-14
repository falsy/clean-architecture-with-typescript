import IPost from "domains/aggregates/interfaces/IPost"
import PostBox from "./PostBox"

const PostList = ({
  posts,
  deletePost
}: {
  posts: IPost[]
  deletePost(id: string): void
}) => {
  return (
    <div>
      <h2 className="text-lg mb-2">Post List</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border border-gray/40 rounded-md text-sm"
          >
            <PostBox post={post} deletePost={deletePost} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
