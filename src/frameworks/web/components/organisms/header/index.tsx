import * as className from 'classnames/bind';
import * as React from "react";
import { useDispatch } from "react-redux";
import { setToken } from '@redux/session';
import ShortBtn from '../../atoms/shortBtn';
import * as styles from './index.scss';


const cx = className.bind(styles);

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(setToken(''));
  };

  return (
    <section className={cx("header")}>
      <h1>React with Clean architecture</h1>
      <div className={cx("btn-area")}>
        <ShortBtn type="button" onClick={handleClickLogout} value="Logout" />
      </div>
    </section>
  );
};

export default Header;