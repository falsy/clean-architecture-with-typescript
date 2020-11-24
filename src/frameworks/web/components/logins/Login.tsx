import * as React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import di from '@di'
import AuthForm from "./AuthForm"

const S_AuthArea = styled.div`
  width: 400px;
  margin: 100px auto;
`

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const handleClickAccreditation = async (id: string, pw: string) => {
    dispatch(await di.session.login(id, pw))
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