import SessionRepository from './Session';

export default (infrastructure: any) => {
  return {
    session: new SessionRepository(infrastructure.remote)
  };
};