import Remote from './Remote';
import WebStorage from './Storage';

export default () => {
  return {
    remote: new Remote(),
    webStorage: new WebStorage()
  };
};