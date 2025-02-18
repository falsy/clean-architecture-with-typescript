/* eslint-disable react-hooks/rules-of-hooks */
import {
  useCallback,
  useMemo,
  useOptimistic,
  useState,
  useTransition
} from "react"
import { atom, useAtom } from "jotai"
import presenters from "../di"
import PostVM from "../vms/PostVM"
import IPostVM from "../vms/interfaces/IPostVM"

const PostsAtoms = atom<IPostVM[]>([])

export default function usePosts() {
  const di = useMemo(() => presenters(), [])

  const [post, setPost] = useState<IPostVM>(null)
  const [posts, setPosts] = useAtom<IPostVM[]>(PostsAtoms)
  const [optimisticPost, setOptimisticPost] = useOptimistic(post)
  const [optimisticPosts, setOptimisticPosts] = useOptimistic(posts)
  const [isPending, startTransition] = useTransition()

  const getPosts = useCallback(async () => {
    startTransition(async () => {
      const resPosts = await di.post.getPosts()
      const postVMs = resPosts.map((post) => new PostVM(post))
      setPosts(postVMs)
    })
  }, [di.post, setPosts])

  const getPost = useCallback(
    async (postId: string) => {
      startTransition(async () => {
        const resPost = await di.post.getPost(postId)
        const postVM = new PostVM(resPost)
        setPost(postVM)
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
          const postVMs = resPosts.map((post) => new PostVM(post))
          setPosts(postVMs)
        }
      })
    },
    [di.post, setPosts]
  )

  const updatePost = useCallback(
    async (postId: string, title: string, content: string) => {
      startTransition(async () => {
        setOptimisticPosts((prevPosts) => {
          return prevPosts.map((post) => {
            if (post.id === postId) {
              post.updateTitle(title)
              post.updateContent(content)
            }
            return post
          })
        })
        if (post && post.id === postId) {
          setOptimisticPost((prevPost) => {
            prevPost.updateTitle(title)
            prevPost.updateContent(content)
            return prevPost
          })
        }

        const updateAt = await di.post.updatePost(postId, { title, content })
        if (updateAt !== "") {
          setPosts((prevPosts) => {
            return prevPosts.map((post) => {
              if (post.id === postId) {
                post.applyUpdatedAt(new Date(updateAt))
              }
              return post
            })
          })
          if (post && post.id === postId) {
            setPost((prevPost) => {
              prevPost.applyUpdatedAt(new Date(updateAt))
              return prevPost
            })
          }
        }
      })
    },
    [di.post, post, setOptimisticPost, setOptimisticPosts, setPosts]
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
            const postVMs = resPosts.map((post) => new PostVM(post))
            setPosts(postVMs)
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
          const postVM = new PostVM(resPost)
          setPost(postVM)
        }
      })
    },
    [di.post, setPost]
  )

  const deleteComment = useCallback(
    async (commentId: string) => {
      startTransition(async () => {
        setOptimisticPost((prevPost) => {
          prevPost.deleteComment(commentId)
          return prevPost
        })

        try {
          const isSucess = await di.post.deleteComment(commentId)
          if (isSucess) {
            const resPost = await di.post.getPost(optimisticPost.id)
            const postVM = new PostVM(resPost)
            setPost(postVM)
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
    updatePost,
    deletePost,
    createComment,
    deleteComment
  }
}
