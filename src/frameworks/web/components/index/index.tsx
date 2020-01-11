import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Presenters from '../../../../domains/interfaces/presenters';
import Actions from '../../../../domains/interfaces/frameworks';
import Login from '../pages/login';
import Board from '../pages/board';

import * as styles from './index.scss';

const cx = className.bind(styles);

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Index: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  const dispatch = useDispatch();
  const token = actions.session.useTokenSelector();

  useEffect(() => {
    const storageToken = window.sessionStorage.getItem('token');
    if (storageToken) {
      dispatch(actions.session.setToken(storageToken));
    }
  }, [token]);

  return (
    <div className={cx("wrap")}>
      {token === '' && (
        <Route path="/">
          <Login presenters={presenters} actions={actions} />
        </Route>
      )}
      {token && (
        <Board presenters={presenters} actions={actions} />
      )}
    </div>
  );
};

export default Index;