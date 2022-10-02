import * as React from 'react'
import styled from 'styled-components'
import Header from '../commons/Header'
import BoardSection from './BoardSection'

const Board: React.FC = () => {

  return (
    <div>
      <Header />
      <$boardContent>
        <BoardSection />
      </$boardContent>
    </div>
  )
}

export default Board

const $boardContent = styled.div`
  padding: 30px;
`