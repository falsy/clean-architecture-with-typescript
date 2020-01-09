import Presenters from '../domains/interfaces/presenters';
import Actions from '../domains/interfaces/frameworks';
import Web from './web';


class Frameworks {

  readonly presenters: Presenters;
  readonly actions: Actions;

  constructor(presenters: Presenters, actions: Actions) {
    this.presenters = presenters;
    this.actions = actions;
  }

  private create() {
    return new Web(this.presenters, this.actions)
  }

  start() {
    return this.create().render();
  }

}

export default Frameworks;