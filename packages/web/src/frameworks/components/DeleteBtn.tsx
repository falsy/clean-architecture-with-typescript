import { css } from "@emotion/react"
import CloseIcon from "./icons/CloseIcon"

export default function DeleteBtn({ onClickDelete }) {
  return (
    <span
      css={css`
        position: absolute;
        top: -10px;
        right: -10px;
        line-height: 0;
        width: 26px;
        height: 26px;
        text-align: center;
        border-radius: 20px;
        background: #fff;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: opacity 0.3s;
        font-size: 18px;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (prefers-color-scheme: dark) {
          background: rgb(160, 160, 160);
        }
      `}
      onClick={onClickDelete}
    >
      <CloseIcon />
    </span>
  )
}
