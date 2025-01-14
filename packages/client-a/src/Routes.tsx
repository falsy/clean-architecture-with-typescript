import { createBrowserRouter, RouterProvider } from "react-router"
import Dashboard from "./components/pages/Dashboard"
import Post from "./components/pages/Post"

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/posts/:postId", element: <Post /> }
])

export const Routes = () => {
  return <RouterProvider router={router} />
}
