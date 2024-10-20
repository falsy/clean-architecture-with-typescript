import { render, screen } from "@testing-library/react"
import Dashboard from "../../frameworks/components/Dashboard"

describe("대시보드", () => {
  test("대시보드 페이지가 정상적으로 렌더링 되어야 한다.", () => {
    render(<Dashboard />)

    expect(screen.getByText("Dashboard")).toBeInTheDocument()
  })
})
