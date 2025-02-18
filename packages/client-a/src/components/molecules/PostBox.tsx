import { Link } from "react-router"
import IPost from "domains/aggregates/interfaces/IPost"
import Button from "../atoms/Button"
import { ChangeEvent, useState } from "react"
import Input from "../atoms/Input"

export default function PostBox({
  post,
  updatePost,
  deletePost
}: {
  post: IPost
  updatePost(id: string, title: string, content: string): void
  deletePost(id: string): void
}) {
  const { id, title: bTitle, content: bContent } = post

  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState(bTitle)
  const [content, setContent] = useState(bContent)

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handleClickUpdatePost = () => {
    if (!title || !content) {
      window.alert("Please enter a title and content.")
      return
    }
    updatePost(id, title, content)
    setIsEdit(false)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-6 w-full">
        <Link to={`/posts/${id}`} className="hover:text-blue-700">
          <div className="flex gap-4">
            <span>
              <span className="text-gray-400">Title: </span>
              {bTitle}
            </span>
            <span>
              <span className="text-gray-400">Content: </span>
              {bContent}
            </span>
          </div>
        </Link>
        <div className="flex gap-4">
          <Button text="Edit" onClick={() => setIsEdit((prev) => !prev)} />
          <Button text="Delete" onClick={() => deletePost(id)} />
        </div>
      </div>
      {isEdit && (
        <div className="p-4 border border-gray/40 rounded-md">
          <div className="flex gap-6 mb-4">
            <Input
              className="basis-[30%] w-full"
              label="Title"
              value={title}
              onChange={handleChangeTitle}
            />
            <Input
              className="basis-[70%] w-full"
              label="Content"
              value={content}
              onChange={handleChangeContent}
            />
          </div>
          <div className="flex gap-4 items-center">
            <Button onClick={handleClickUpdatePost} text="Save" />
          </div>
        </div>
      )}
    </div>
  )
}
