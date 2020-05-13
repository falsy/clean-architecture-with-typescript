import * as React from "react";
import styled from 'styled-components';
import Header from '../organisms/Header';
import BaordSection from '../organisms/BoardSection';

const BoardContent = styled.div`
  padding: 30px;
`;

const Board: React.FC = () => {

  return (
    <div className={"board"}>
      <Header />
      <BoardContent>
        <BaordSection />
      </BoardContent>
    </div>
  );
};

export default Board;