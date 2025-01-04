import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import IPost from "domains/aggregates/interfaces/IPost"
import useDependencies from "../hooks/useDependencies"

export default function Post() {
  const { presenters } = useDependencies()
  const { postId } = useParams()

  const [post, setPost] = useState<IPost | null>(null)
  const [comment, setContent] = useState("")

  const getPost = async () => {
    const post = await presenters.post.getDetailPost(postId)
    setPost(post)
  }

  const handleClickCreateComment = async (content: string) => {
    const isSuccess = await presenters.post.createComment(postId, content)
    if (isSuccess) {
      setContent("")
      getPost()
    }
  }

  const handleClickDeleteComment = async (commentId: string) => {
    const isSuccess = await presenters.post.deleteComment(commentId)
    if (isSuccess) {
      getPost()
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <h1>Post</h1>
      {post && (
        <div>
          <section>
            <div>
              <p>title: {post.title}</p>
            </div>
            <div>
              <p>content: {post.content}</p>
            </div>
          </section>
          <section>
            <h2>Comments</h2>
            <div>
              <ul>
                {post.comments.map((comment) => (
                  <li key={comment.id}>
                    <p>comment content: {comment.content}</p>
                    <p>
                      <button
                        onClick={() => handleClickDeleteComment(comment.id)}
                      >
                        Delete
                      </button>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p>
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setContent(e.target.value)}
                />
              </p>
              <p>
                <button onClick={() => handleClickCreateComment(comment)}>
                  Create Comment
                </button>
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
