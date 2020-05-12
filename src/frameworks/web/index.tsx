import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from '@frameworks/web/redux/store';
import Router from "./components/pages/Router";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));