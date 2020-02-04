import * as className from 'classnames/bind';
import * as React from "react";
import Header from '../../organisms/header';
import BaordSection from '../../organisms/boardSection';
import * as styles from './index.scss';


const cx = className.bind(styles);

const Board: React.FC = () => {

  return (
    <div className={cx("board")}>
      <Header />
      <div className={cx("board-content")}>
        <BaordSection />
      </div>
    </div>
  );
};

export default Board;