import { css } from "@emotion/react"
import CloseIcon from "./icons/CloseIcon"

export default function MemoBox({
  memos,
  index,
  handleChangeMemo,
  handleDeleteMemo
}) {
  return (
    <div
      css={css`
        padding-bottom: 5px;
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          li {
            div {
              display: flex;
            }
          }
        }
      `}
    >
      <ul>
        {memos.map((memo, i) => {
          return (
            <li key={"memo" + index + i}>
              <div>
                <input
                  type="text"
                  value={memo}
                  css={css`
                    flex-grow: 1;
                    line-height: 20px;
                    margin: 0 0 5px;
                    width: 100%;
                    font-size: 13px;
                    padding: 0 2px;
                    border: 0;
                    outline: none;
                    background: transparent;

                    @media (prefers-color-scheme: dark) {
                      color: #bbb;
                    }
                  `}
                  onChange={(e) => {
                    handleChangeMemo(e, i)
                  }}
                  placeholder="이곳에 추가적인 메모를 입력할 수 있어요."
                />
                <div
                  css={css`
                    cursor: pointer;
                    svg {
                      margin-top: 1px;
                      opacity: 0.5;
                    }

                    @media (prefers-color-scheme: dark) {
                      svg {
                        stroke: #eee;
                      }
                    }
                  `}
                  onClick={() => handleDeleteMemo(i)}
                >
                  <CloseIcon />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
