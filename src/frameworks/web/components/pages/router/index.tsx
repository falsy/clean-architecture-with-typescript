import * as className from 'classnames/bind';
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ISessionStateGroup } from '@interfaces/frameworks/session';
import presenters from '@adapters/presenters';
import Login from '../login';
import Home from '../home';
import * as styles from './index.scss';

const cx = className.bind(styles);

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: ISessionStateGroup) => state.session.token);

  useEffect(() => {
    const storageToken = presenters.session.getToken();
    if (storageToken) {
      dispatch(presenters.session.setToken(storageToken));
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