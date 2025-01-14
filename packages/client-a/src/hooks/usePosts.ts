/* eslint-disable react-hooks/rules-of-hooks */
import {
  useCallback,
  useMemo,
  useOptimistic,
  useState,
  useTransition
} from "react"
import { atom, useAtom } from "jotai"
import IPost from "domains/aggregates/interfaces/IPost"
import Post from "domains/aggregates/Post"
import presenters from "../di"

const PostsAtoms = atom<IPost[]>([])

export default function usePosts() {
  const di = useMemo(() => presenters(), [])

  const [post, setPost] = useState<IPost>(null)
  const [posts, setPosts] = useAtom<IPost[]>(PostsAtoms)
  const [optimisticPost, setOptimisticPost] = useOptimistic(post)
  const [optimisticPosts, setOptimisticPosts] = useOptimistic(posts)
  const [isPending, startTransition] = useTransition()

  const getPosts = useCallback(async () => {
    startTransition(async () => {
      const resPosts = await di.post.getPosts()
      setPosts(resPosts)
    })
  }, [di.post, setPosts])

  const getPost = useCallback(
    async (postId: string) => {
      startTransition(async () => {
        const resPost = await di.post.getPost(postId)
        setPost(resPost)
      })
    },
    [di.post, setPost]
  )

  const createPost = useCallback(
    async (title: string, content: string) => {
      startTransition(async () => {
        const isSucess = await di.post.createPost({ title, content })
        if (isSucess) {
          const resPosts = await di.post.getPosts()
          setPosts(resPosts)
        }
      })
    },
    [di.post, setPosts]
  )

  const deletePost = useCallback(
    async (postId: string) => {
      startTransition(async () => {
        setOptimisticPosts((prevPosts) => {
          return prevPosts.filter((post) => post.id !== postId)
        })

        try {
          const isSucess = await di.post.deletePost(postId)
          if (isSucess) {
            const resPosts = await di.post.getPosts()
            setPosts(resPosts)
          }
        } catch (e) {
          console.error(e)
        }
      })
    },
    [di.post, setOptimisticPosts, setPosts]
  )

  const createComment = useCallback(
    async (postId: string, content: string) => {
      startTransition(async () => {
        const isSucess = await di.post.createComment(postId, content)
        if (isSucess) {
          const resPost = await di.post.getPost(postId)
          setPost(resPost)
        }
      })
    },
    [di.post, setPost]
  )

  const deleteComment = useCallback(
    async (commentId: string) => {
      startTransition(async () => {
        setOptimisticPost((prevPost) => {
          const newPost = new Post({
            ...prevPost,
            comments: prevPost.comments.filter(
              (comment) => comment.id !== commentId
            )
          })
          return newPost
        })

        try {
          const isSucess = await di.post.deleteComment(commentId)
          if (isSucess) {
            const resPost = await di.post.getPost(optimisticPost.id)
            setPost(resPost)
          }
        } catch (e) {
          console.error(e)
        }
      })
    },
    [di.post, optimisticPost, setOptimisticPost, setPost]
  )

  return {
    isPending,
    posts: optimisticPosts,
    post: optimisticPost,
    getPosts,
    getPost,
    createPost,
    deletePost,
    createComment,
    deleteComment
  }
}
