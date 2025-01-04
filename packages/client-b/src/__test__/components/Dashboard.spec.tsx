import { render, screen, fireEvent, waitFor, act } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import IPost from "domains/aggregates/interfaces/IPost"
import Dashboard from "../../components/Dashboard"
import useDependencies from "../../hooks/useDependencies"

jest.mock("../../hooks/useDependencies")

const mockPosts: IPost[] = [
  {
    id: "1",
    title: "Post 1",
    content: "Content of Post 1",
    author: { userId: "1", userName: "User 1" },
    comments: [],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    title: "Post 2",
    content: "Content of Post 2",
    author: { userId: "1", userName: "User 1" },
    comments: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

describe("Dashboard Component", () => {
  beforeEach(() => {
    const mockDependencies = {
      presenters: {
        post: {
          getSummaryPosts: jest.fn().mockResolvedValue(mockPosts),
          createPost: jest.fn().mockResolvedValue(true),
          deletePost: jest.fn().mockResolvedValue(true)
        }
      }
    }

    ;(useDependencies as jest.Mock).mockReturnValue(mockDependencies)
  })

  it("should render posts list on load", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      )
    })

    await waitFor(() => {
      expect(screen.getByText(/Content of Post 1/i)).toBeInTheDocument()
      expect(screen.getByText(/Content of Post 2/i)).toBeInTheDocument()
    })
  })

  it("should create a new post", async () => {
    const { presenters } = useDependencies()

    await act(async () => {
      render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      )
    })

    fireEvent.change(screen.getByLabelText("title"), {
      target: { value: "New Post" }
    })
    fireEvent.change(screen.getByLabelText("content"), {
      target: { value: "New Content" }
    })

    fireEvent.click(screen.getByText("Create Post"))

    await waitFor(() => {
      expect(presenters.post.createPost).toHaveBeenCalledWith({
        content: "New Content",
        title: "New Post"
      })
    })
  })

  it("should delete a post", async () => {
    const { presenters } = useDependencies()

    await act(async () => {
      render(
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      )
    })

    await waitFor(() => {
      expect(screen.getByText("Post 1")).toBeInTheDocument()
      expect(screen.getByText("Post 2")).toBeInTheDocument()
    })

    fireEvent.click(screen.getAllByText("Delete Post")[0])

    await waitFor(() => {
      expect(presenters.post.deletePost).toHaveBeenCalledWith(mockPosts[0].id)
    })
  })
})
