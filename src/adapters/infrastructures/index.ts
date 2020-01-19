import Mock from './Mock';
import Remote from './Remote';

export default () => {
  return {
    mock: new Mock(),
    remote: new Remote()
  };
};