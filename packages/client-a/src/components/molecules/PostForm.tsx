import { ChangeEvent, useState } from "react"
import Button from "../atoms/Button"
import Input from "../atoms/Input"

const PostForm = ({
  createPost
}: {
  createPost(title: string, content: string): void
}) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleClickCreatePost = () => {
    if (!title || !content) {
      window.alert("Please enter a title and content.")
      return
    }
    setTitle("")
    setContent("")
    createPost(title, content)
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  return (
    <div className="post-form">
      <h2 className="text-lg mb-2">Create Post</h2>
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
          <Button onClick={handleClickCreatePost} text="Create" />
        </div>
      </div>
    </div>
  )
}

export default PostForm
