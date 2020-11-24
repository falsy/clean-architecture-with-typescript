import * as React from "react"
import styled from 'styled-components'
import { useState } from "react"
import Input from '../commons/Input'
import LongBtn from '../commons/LongBtn'

const S_BtnArea = styled.div`
  margin: 10px 0;
`

interface IProps {
  accredit(id: string, pw: string): void
  btnValue: string
}

const AuthForm: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props
  const [id, setId] = useState<string>('')
  const [pw, setPw] = useState<string>('')

  const handleChangeClientInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const updateFnc = event.target.name === 'id' ? setId : setPw
    updateFnc(event.target.value)
  }

  const handleClickAccredit = () => {
    accredit(id, pw)
  }

  const handleKeyDownAccredit = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      accredit(id, pw)
    }
  }

  return (
    <section>
      <S_BtnArea>
        <Input type="text" name="id" placeholder="ID" onChange={handleChangeClientInfo} onKeyDown={null} value={id} />
      </S_BtnArea>
      <S_BtnArea>
        <Input type="password" name="pw" placeholder="Password" onChange={handleChangeClientInfo} onKeyDown={handleKeyDownAccredit} value={pw} />
      </S_BtnArea>
      <S_BtnArea>
        <LongBtn type="button" onClick={handleClickAccredit} value={btnValue} />
      </S_BtnArea>
    </section>
  )
}

export default AuthForm