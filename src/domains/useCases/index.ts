import Session from "./session";

export default (repositories: any) => {
  return {
    session: new Session(repositories.session)
  };
};
