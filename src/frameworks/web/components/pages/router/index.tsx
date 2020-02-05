import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { setToken, useTokenSelector } from '@redux/session';
import Login from '../login';
import Home from '../home';
import * as styles from './index.scss';


const cx = className.bind(styles);

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const token = useTokenSelector();

  useEffect(() => {
    const storageToken = window.sessionStorage.getItem('token');
    if (storageToken) {
      dispatch(setToken(storageToken));
    }
  }, [token]);

  return (
    <div className={cx("wrap")}>
      {token === '' && (
        <Login />
      )}
      {token && (
        <Router>
          <Route path="">
            <Home />
          </Route>
        </Router>
      )}
    </div>
  );
};

export default Index;