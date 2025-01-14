import { useEffect } from "react"
import { useParams } from "react-router"
import usePosts from "../../../hooks/usePosts"
import Content from "../../templates/Content"
import CommentForm from "../../molecules/CommentForm"
import DimmedLoading from "../../atoms/DimmedLoading"
import PostDetail from "../../atoms/PostDetail"
import CommentList from "../../atoms/CommentList"

export default function PostContent() {
  const { postId } = useParams()
  const { isPending, post, getPost, createComment, deleteComment } = usePosts()

  useEffect(() => {
    getPost(postId)
  }, [postId, getPost])

  const handleClickDeleteComment = (commentId: string) => {
    deleteComment(commentId)
  }

  const handleClickCreateComment = (commentContent: string) => {
    createComment(postId, commentContent)
  }

  return (
    <Content className="p-4 pl-6 pt-4">
      <h1 className="text-sm text-black/50 mb-4">Post</h1>
      <div className="relative flex flex-col gap-4 text-sm">
        <PostDetail post={post} />
        <CommentList
          comments={post?.comments}
          deleteComment={handleClickDeleteComment}
        />
        <CommentForm createComment={handleClickCreateComment} />
        {isPending && <DimmedLoading />}
      </div>
    </Content>
  )
}
