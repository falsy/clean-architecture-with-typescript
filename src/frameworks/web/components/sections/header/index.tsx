import * as className from 'classnames/bind';
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Presenters from '../../../../../domains/interfaces/presenters';
import Actions from '../../../../../domains/interfaces/frameworks';
import * as styles from './header.scss';

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
    <div className={cx("header")}>
      <button type="button" onClick={handleClickLogout}>Logout</button>
    </div>
  );
};

export default Header;