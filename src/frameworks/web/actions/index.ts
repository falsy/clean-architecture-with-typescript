import SessionAction from './Session';

export default (presneters: any) => {
  return {
    session: new SessionAction(presneters.session)
  };
};