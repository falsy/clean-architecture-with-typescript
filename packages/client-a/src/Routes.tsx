import { createBrowserRouter, RouterProvider } from "react-router"
import Dashboard from "./components/Dashboard"
import Post from "./components/Post"

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/posts/:postId", element: <Post /> }
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
