import * as React from "react"
import styled from 'styled-components'

const SShortBtn = styled.button`
  border: 1px solid #26b49e;
  background: #33c1ab;
  color: #fff;
  display: inline-block;
  padding: 0 20px;
  line-height: 34px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  text-shadow: 0px 0px 1px #1d9b88;
`

interface IProps {
  type: "button" | "submit" | "reset"
  value: string
  onClick(): void
}

const ShortButton: React.FC<IProps> = (props) => {
  const { type, value, onClick } = props

  return (
    <SShortBtn className={"short-button"} type={type} onClick={onClick}>{value}</SShortBtn>
  )
}

export default ShortButton