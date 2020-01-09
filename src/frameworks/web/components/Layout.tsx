import * as React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Presenters from '../../../domains/interfaces/presenters';
import Actions from '../../../domains/interfaces/frameworks';
import Login from './Login';

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Layout: React.FC<Props> = (props) => {
  const { presenters, actions } = props;
  
  const token = actions.session.useTokenSelector();

  useEffect(() => {
    // if(token) {
    //   window.sessionStorage.setItem('token', token);
    //   history.push('/shopping-mall/products');
    // } else {
    //   const storageToken = window.sessionStorage.getItem('token');
    //   if(storageToken) {
    //     dispatch(SessionPresenter.setToken(storageToken));
    //     if(pathname === '/') history.push('/shopping-mall/products');
    //   } else {
    //     history.push('/');
    //   }
    // }
  }, [token]);

  return (
    <div>
      {token === '' && (
        <Route path="/">
          <Login presenters={presenters} actions={actions} />
        </Route>
      )}
      {token && (
        <div>hello world</div>
      )}
    </div>
  );
};

export default Layout;