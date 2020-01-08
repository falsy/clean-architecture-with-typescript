interface Remote {
  login(id: string, pw: string): Promise<string>;
}

export default Remote;
