import { css } from "@emotion/react"
import useDependencies from "../hooks/useDependencies"

export default function AddTrackerBtn({ showErrorMessage, getTrackerList }) {
  const { controllers } = useDependencies()

  const handleClickAddDelivery = async () => {
    const isSuccess = await controllers.tracker.addTracker()
    if (isSuccess === false) {
      showErrorMessage()
      return
    }
    getTrackerList()
  }

  return (
    <div
      css={css`
        padding: 0 20px 40px;
      `}
    >
      <button
        css={css`
          display: inline-block;
          width: 80px;
          font-size: 14px;
          line-height: 32px;
          color: #fff;
          background: #00dc9b;
          border: 1px solid #05c38b;
          cursor: pointer;
          text-shadow: 0px 0px 1px #075c43;
          letter-spacing: 1px;
          font-weight: 700;
          opacity: 1;
          transition: opacity 0.3s;
          &:hover {
            opacity: 0.8;
          }
        `}
        onClick={handleClickAddDelivery}
      >
        추가
      </button>
    </div>
  )
}
