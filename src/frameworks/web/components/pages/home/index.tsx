import * as className from 'classnames/bind';
import * as React from "react";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import Board from '../../templates/board';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Home: React.FC<Props> = (props) => {
  const { presenters, actions } = props;

  return (
    <div className={cx("home")}>
      <Board presenters={presenters} actions={actions} />
    </div>
  );
};

export default Home;