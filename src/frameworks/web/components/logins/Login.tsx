import * as React from 'react'
import { useSetToken } from '@hooks/sessionRecoil'
import styled from 'styled-components'
import AuthForm from './AuthForm'
import di from '@di'

const Login: React.FC = () => {
  const setToken = useSetToken()

  const handleClickAccreditation = async (id: string, pw: string) => {
    const token = await di.session.login(id, pw)
    di.session.setToken(token)
    setToken(token)
  }

  return (
    <div>
      <S_AuthArea>
        <AuthForm accredit={handleClickAccreditation} btnValue={"Login"} />
      </S_AuthArea>
    </div>
  )
}

export default Login

const S_AuthArea = styled.div`
  width: 400px;
  margin: 100px auto;
`