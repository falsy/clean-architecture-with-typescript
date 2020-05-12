import * as React from "react";
import Header from '../organisms/Header';
import BaordSection from '../organisms/BoardSection';

const Board: React.FC = () => {

  return (
    <div className={"board"}>
      <Header />
      <div className={"board-content"}>
        <BaordSection />
      </div>
    </div>
  );
};

export default Board;