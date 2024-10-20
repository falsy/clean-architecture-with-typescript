import { css } from "@emotion/react"
import CloseIcon from "./icons/CloseIcon"

export default function ErrorMessageBox({ message, onClickClear }) {
  return (
    <div
      css={css`
        margin: 20px 20px 0;
        padding: 10px 12px 9px;
        background: #ffd4b9;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
        white-space: pre-wrap;
        line-height: 18px;
        font-size: 12px;
        color: #444;
        position: relative;
      `}
    >
      <p
        css={css`
          margin: 0;
        `}
      >
        {message === "error" ? "알 수 없는 오류가 발생하였습니다." : message}
      </p>
      <div
        css={css`
          position: absolute;
          top: 4px;
          right: 4px;
          cursor: pointer;
          padding: 5px;
        `}
        onClick={onClickClear}
      >
        <CloseIcon />
      </div>
    </div>
  )
}
