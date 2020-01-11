import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Presenters from '../../domains/interfaces/presenters';
import Actions from '../../domains/interfaces/frameworks';
import store from './store';
import Layout from "./components/layout";


class App {

  readonly presenters: Presenters;
  readonly actions: Actions;

  constructor(presenters: Presenters, actions: Actions) {
    this.presenters = presenters;
    this.actions = actions
  }

  render() {
    return ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Route path="">
            <Layout presenters={this.presenters} actions={this.actions} />
          </Route>
        </Router>
      </Provider>,
      document.getElementById("app")
    )
  }

}

export default App;