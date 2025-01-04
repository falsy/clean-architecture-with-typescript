import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import IPost from "domains/aggregates/interfaces/IPost"
import useDependencies from "../hooks/useDependencies"

export default function Dashboard() {
  const { presenters } = useDependencies()

  const [posts, setPosts] = useState<IPost[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const getPosts = async () => {
    const posts = await presenters.post.getSummaryPosts()
    setPosts(posts)
  }

  const handleClickCreatePost = async () => {
    const isSuccess = await presenters.post.createPost({
      title: title,
      content: content
    })

    if (isSuccess) {
      setTitle("")
      setContent("")
      getPosts()
    }
  }

  const handleClickDeletePost = async (postId: string) => {
    const isSuccess = await presenters.post.deletePost(postId)
    if (isSuccess) {
      getPosts()
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>
                title: <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </p>
              <p>content: {post.content}</p>
              <p>
                <button onClick={() => handleClickDeletePost(post.id)}>
                  Delete Post
                </button>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <section>
        <h2>Create Posts</h2>
        <div>
          <label htmlFor="title">title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">content</label>
          <input
            id="content"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <p>
            <button onClick={handleClickCreatePost}>Create Post</button>
          </p>
        </div>
      </section>
    </div>
  )
}
