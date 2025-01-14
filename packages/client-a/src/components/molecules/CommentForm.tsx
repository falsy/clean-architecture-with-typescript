import { ChangeEvent, useState } from "react"
import Input from "../atoms/Input"
import Button from "../atoms/Button"

export default function CommentForm({
  createComment
}: {
  createComment(commentContent: string): void
}) {
  const [commentContent, setCommentContent] = useState("")

  const handleChangeCommentContent = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value)
  }

  const handleClickCreateComment = () => {
    if (!commentContent) {
      window.alert("Please enter a content.")
      return
    }
    setCommentContent("")
    createComment(commentContent)
  }

  return (
    <div className="comment-form">
      <h2 className="text-lg mb-2">Create Comment</h2>
      <div className="p-4 border border-gray/40 rounded-md">
        <div className="mb-4 w-full">
          <Input
            label={"Comment"}
            value={commentContent}
            onChange={handleChangeCommentContent}
          />
        </div>
        <div className="flex gap-4 items-center">
          <Button onClick={handleClickCreateComment} text="Create" />
        </div>
      </div>
    </div>
  )
}
