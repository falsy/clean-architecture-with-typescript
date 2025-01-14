import IPost from "domains/aggregates/interfaces/IPost"

export default function PostDetail({ post }: { post: IPost }) {
  return (
    <div>
      <h2 className="text-lg pb-2">Post</h2>
      <div className="relative p-4 border border-gray/40 rounded-md text-sm">
        <div className="flex flex-col gap-6 mb-4">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Title</span>
            <p>{post?.title}</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400">Content</span>
            <p>{post?.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
