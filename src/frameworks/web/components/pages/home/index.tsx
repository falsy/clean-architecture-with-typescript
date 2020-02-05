import * as className from 'classnames/bind';
import * as React from "react";
import Board from '../../templates/board';
import * as styles from './index.scss';


const cx = className.bind(styles);

const Home: React.FC = () => {
  return (
    <div className={cx("home")}>
      <Board />
    </div>
  );
};

export default Home;