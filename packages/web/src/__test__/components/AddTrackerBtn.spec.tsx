import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import AddTrackerBtn from "../../frameworks/components/AddTrackerBtn"
import useDependencies from "../../frameworks/hooks/useDependencies"

jest.mock("../../frameworks/hooks/useDependencies")

describe("배송조회 추가 버튼", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDependencies as jest.Mock).mockReturnValue({
      controllers: {
        tracker: {
          addTracker: jest.fn().mockReturnValue(true)
        }
      }
    })
  })

  test("배송조회 추가 버튼이 정상적으로 렌더링 되어야 한다.", () => {
    const getTrackerList = jest.fn()
    const showErrorMessage = jest.fn()

    render(
      <AddTrackerBtn
        showErrorMessage={showErrorMessage}
        getTrackerList={getTrackerList}
      />
    )

    expect(screen.getByText("추가")).toBeInTheDocument()
  })

  test("배송조회 추가 버튼을 누르면 props 함수를 호출한다.", async () => {
    const getTrackerList = jest.fn()
    const showErrorMessage = jest.fn()

    render(
      <AddTrackerBtn
        showErrorMessage={showErrorMessage}
        getTrackerList={getTrackerList}
      />
    )

    expect(screen.getByText("추가")).toBeInTheDocument()

    const addDeliveryButton = screen.getByText("추가")

    userEvent.click(addDeliveryButton)

    await waitFor(() => {
      expect(getTrackerList).toHaveBeenCalled()
    })
  })
})
