import * as React from 'react'
import styled from 'styled-components'
import { useSetToken } from '../../hooks/sessionRecoil'
import AuthForm from './AuthForm'

import di from '../../di'

const Login: React.FC = () => {
  const setToken = useSetToken()

  const handleClickAccreditation = async (id: string, pw: string) => {
    const token = await di.session.login(id, pw)
    di.session.setToken(token)
    setToken(token)
  }

  return (
    <div>
      <$authArea>
        <AuthForm accredit={handleClickAccreditation} btnValue={"Login"} />
      </$authArea>
    </div>
  )
}

export default Login

const $authArea = styled.div`
  width: 400px;
  margin: 100px auto;
`