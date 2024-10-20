import { css } from "@emotion/react"
import useDependencies from "../hooks/useDependencies"

interface IProps {
  getTrackerList(): void
}

const TipMessage = ({ getTrackerList }: IProps) => {
  const { controllers } = useDependencies()

  const handleClickReset = async () => {
    if (
      window.confirm(
        "초기화하면 기존의 저정된 모든 운송장 번호가 삭제됩니다.\n미리 다른곳에 메모해 주세요."
      )
    ) {
      try {
        await controllers.tracker.clearTrackers()
        await controllers.tracker.addTracker()
        getTrackerList()
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <section
      css={css`
        padding: 0 20px;
        font-size: 12px;
        color: #444;

        @media (prefers-color-scheme: dark) {
          color: #ddd;
        }
      `}
    >
      <p
        css={css`
          margin: 4px 0;
          line-height: 18px;
          padding-left: 10px;
          position: relative;
          &::before {
            content: "*";
            position: absolute;
            left: 0;
          }
        `}
      >
        서비스가 정상 동작하지 않을 경우 아래의 <strong>[초기화]</strong>를
        진행해 주세요.
        <br />
        <span
          css={css`
            display: inline-block;
            color: #05c38b;
            font-weight: bold;
            padding: 2px 0;
            font-size: 13px;
            cursor: pointer;
          `}
          onClick={handleClickReset}
        >
          [초기화]
        </span>
      </p>
    </section>
  )
}

export default TipMessage
