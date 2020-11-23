import * as React from "react"
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import di from '@di/index'
import ShortBtn from '../items/ShortBtn'

const SHeaderArea = styled.section`
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

const SLogo = styled.h1`
  float: left;
  margin: 0;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
`

const SBtnArea = styled.div`
  float: right;
`

const Header: React.FC = () => {
  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch(di.session.removeToken())
  }

  return (
    <SHeaderArea>
      <SLogo>React with Clean architecture</SLogo>
      <SBtnArea>
        <ShortBtn type="button" onClick={handleClickLogout} value="Logout" />
      </SBtnArea>
    </SHeaderArea>
  )
}


export default Header