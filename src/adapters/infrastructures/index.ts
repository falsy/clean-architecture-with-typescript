import HttpRequest from './HttpRequest';

export default () => {
  return {
    httpRequest: new HttpRequest()
  };
};