import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Layout from "./components/Layout";


class App {

  readonly presenters: any;

  constructor(presenters: any) {
    this.presenters = presenters;
  }

  render(store: any) {
    return ReactDOM.render(
      <Provider store={store}>
        <Layout presenters={ this.presenters }  />
      </Provider>,
      document.getElementById("app")
    )
  }

}

export default App;