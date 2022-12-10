import React from 'react'
import styled from 'styled-components'

import ShortBtn from './ShortBtn'

import { useSetToken } from '../../hooks/sessionRecoil'
import di from '../../di'

const Header: React.FC = () => {
  const setUserToken = useSetToken();

  const handleClickLogout = () => {
    di.session.removeToken()
    setUserToken('')
  }

  return (
    <$headerArea>
      <$logo>React with Clean architecture</$logo>
      <$btnArea>
        <ShortBtn type="button" onClick={handleClickLogout} value="Logout" />
      </$btnArea>
    </$headerArea>
  )
}

export default Header

const $headerArea = styled.section`
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

const $logo = styled.h1`
  float: left;
  margin: 0;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
`

const $btnArea = styled.div`
  float: right;
`