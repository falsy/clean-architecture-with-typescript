import * as React from "react"
import styled from 'styled-components'
import AuthBox from '../sections/AuthBox'

const AuthArea = styled.div`
  width: 400px;
  margin: 100px auto;
`;

interface IProps {
  accredit(id: string, pw: string): void
  btnValue: string
}

const Authorization: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props

  return (
    <AuthArea>
      <AuthBox accredit={accredit} btnValue={btnValue} />
    </AuthArea>
  )
}

export default Authorization