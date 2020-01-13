import * as className from 'classnames/bind';
import * as React from "react";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import Header from '../../organisms/header';
import BaordSection from '../../organisms/boardSection';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Board: React.FC<Props> = (props) => {
  const { presenters, actions } = props;

  return (
    <div className={cx("board")}>
      <Header presenters={presenters} actions={actions} />
      <div className={cx("board-content")}>
        <BaordSection presenters={presenters} actions={actions} />
      </div>
    </div>
  );
};

export default Board;