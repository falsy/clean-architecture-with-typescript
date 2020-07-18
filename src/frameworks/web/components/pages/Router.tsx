import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ISessionStateGroup } from '@frameworks/web/redux/interfaces/iSession';
import di from '@di/index';
import Login from './Login';
import Home from './Home';

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: ISessionStateGroup) => state.session.token);

  useEffect(() => {
    const storageToken = di.session.getToken();
    if (storageToken) {
      dispatch(di.session.setToken(storageToken));
    }
  }, [token]);

  return (
    <div className={"wrap"}>
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