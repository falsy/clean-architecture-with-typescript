import Http from 'adapter/src/infrastructures/Http';
// import Stoarge from '@adapter/infrastructures/Storage'

export default () => {
  return {
    http: new Http(),
    // storage: new Stoarge((window as any).sessionStorage)
  };
};
