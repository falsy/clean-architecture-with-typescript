import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import ShortBtn from '../../atoms/shortBtn';
import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Header: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(actions.session.logout());
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