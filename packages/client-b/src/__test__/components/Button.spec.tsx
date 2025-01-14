import { render, screen, fireEvent } from "@testing-library/react"
import Button from "../../components/atoms/Button"

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button text="Click" />)

    const buttonElement = screen.getByRole("button", { name: /Click/i })
    expect(buttonElement).toBeInTheDocument()
  })

  test("calls onClick function when button is clicked", () => {
    const handleClick = jest.fn()
    render(<Button text="Click" onClick={handleClick} />)

    const buttonElement = screen.getByRole("button", { name: /Click/i })
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("does not throw error if onClick is not provided", () => {
    render(<Button text="Click" />)

    const buttonElement = screen.getByRole("button", { name: /Click/i })
    fireEvent.click(buttonElement)

    expect(buttonElement).toBeInTheDocument()
  })
})
