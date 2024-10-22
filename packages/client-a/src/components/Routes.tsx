import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./Dashboard"
import Post from "./Post"

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/posts/:postId", element: <Post /> }
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
