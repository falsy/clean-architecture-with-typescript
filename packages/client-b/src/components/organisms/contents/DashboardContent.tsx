import { useEffect } from "react"
import usePosts from "../../../hooks/usePosts"
import Content from "../../templates/Content"
import PostForm from "../../molecules/PostForm"
import PostList from "../../molecules/PostList"
import DimmedLoading from "../../atoms/DimmedLoading"

export default function DashboardContent() {
  const { isPending, posts, getPosts, createPost, deletePost } = usePosts()

  useEffect(() => {
    getPosts()
  }, [getPosts])

  const handleClickCreatePost = (title: string, content: string) => {
    createPost(title, content)
  }

  const handleClickDeletePost = (id: string) => {
    deletePost(id)
  }

  return (
    <Content className="p-4 pl-6 pt-4">
      <h1 className="text-sm text-black/50 mb-4">Dashboard</h1>
      <div className="relative flex flex-col gap-4 text-sm">
        <PostList posts={posts} deletePost={handleClickDeletePost} />
        <PostForm createPost={handleClickCreatePost} />
        {isPending && <DimmedLoading />}
      </div>
    </Content>
  )
}
