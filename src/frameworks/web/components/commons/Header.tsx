import * as React from "react"
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import ShortBtn from './ShortBtn'
import di from '@di'

const S_HeaderArea = styled.section`
  width: 100%;
  height: 70px;
  padding: 17px 30px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.08);

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const S_Logo = styled.h1`
  float: left;
  margin: 0;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
`

const S_BtnArea = styled.div`
  float: right;
`

const Header: React.FC = () => {
  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch(di.session.removeToken())
  }

  return (
    <S_HeaderArea>
      <S_Logo>React with Clean architecture</S_Logo>
      <S_BtnArea>
        <ShortBtn type="button" onClick={handleClickLogout} value="Logout" />
      </S_BtnArea>
    </S_HeaderArea>
  )
}


export default Header