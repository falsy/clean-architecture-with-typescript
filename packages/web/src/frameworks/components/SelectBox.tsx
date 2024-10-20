import { css } from "@emotion/react"

export default function SelectBox({
  selectBoxOpenIdx,
  index,
  carrierList,
  handleClickSelect
}) {
  return (
    <ul
      css={css`
        position: absolute;
        width: 100%;
        padding: 0;
        line-height: 35px;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        margin-top: 0;
        list-style: none;
        background: #f9f9f9;
        z-index: 100;
        max-height: 240px;
        overflow-y: scroll;
        border-bottom: 1px solid #ddd;
        display: none;
        ${selectBoxOpenIdx === index + 1 && "display: block;"}

        @media (prefers-color-scheme: dark) {
          border-color: rgb(85, 85, 85);
          color: #fff;
        }
      `}
    >
      {carrierList.map((carrier) => (
        <li
          key={carrier.id}
          css={css`
            padding: 0 15px;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
            font-size: 13px;
            &:hover {
              background: #fff;
            }
            &:last-child {
              border-bottom: 0;
            }

            @media (prefers-color-scheme: dark) {
              background: rgb(55, 55, 55);
              border-color: rgb(85, 85, 85);
              &:hover {
                background: rgb(65, 65, 65);
              }
            }
          `}
          onClick={() => handleClickSelect(carrier.id)}
        >
          {carrier.displayName}
        </li>
      ))}
    </ul>
  )
}
