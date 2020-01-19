import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Presenters from '../../domains/interfaces/presenters';
import Actions from '../../domains/interfaces/frameworks';
import store from './store';
import Router from "./components/pages/router";
import './style.scss';


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
        <Router presenters={this.presenters} actions={this.actions} />
      </Provider>,
      document.getElementById("app")
    )
  }

}

export default App;