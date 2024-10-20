import { css } from "@emotion/react"

export default function SubmitBtn({ onClick, text, isWindow = false }) {
  return (
    <button
      css={css`
        border: 1px solid #05c38b;
        line-height: 40px;
        padding: 0;
        background: #00dc9b;
        color: #fff;
        width: 30%;
        min-width: 60px;
        font-size: 14px;
        cursor: pointer;
        text-shadow: 0px 0px 1px #075c43;
        letter-spacing: 1px;
        font-weight: 700;
        ${isWindow &&
        `
          background: #f5f5f5;
          border: 1px solid #ddd;
          border-right: 0;
          border-top-color: rgb(220, 220, 220);
          border-bottom-color: rgb(220, 220, 220);
          text-shadow: none;
          color: #000;
          font-weight: 500;
          &:last-of-type {
            border-right: 1px solid rgb(220, 220, 220);
          }
          &:hover {
            background: #eaeaea;
          }
          @media (prefers-color-scheme: dark) {
            background: rgb(44, 44, 44);
            color: #ddd;
            border-color: rgb(85, 85, 85);
            border-right: 0;
            border-top-color: rgb(50, 50, 50);
            border-bottom-color: rgb(50, 50, 50);
            &:last-of-type {
              border-right: 1px solid rgb(50, 50, 50);
            }
            &:hover {
              background: rgb(30, 30, 30);
            }
          }
        `}
        transition: all 0.3s;
        &:hover {
          opacity: 0.8;
        }
      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
