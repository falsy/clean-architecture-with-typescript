import { PresenterImpl } from "../domains/interfaces/presenters";
import store from "./redux";
import App from "./react";

class Frameworks {
  readonly presenters: PresenterImpl;

  constructor(presenters: PresenterImpl) {
    this.presenters = presenters;
  }

  private create() {
    return new App(this.presenters);
  }

  render() {
    return this.create().render(store);
  }
}

export default Frameworks;
