import * as React from "react";
import { useEffect } from "react";
import Presenters from '../../../domains/interfaces/presenters';
import Actions from '../../../domains/interfaces/frameworks';

interface Props {
  presenters: Presenters;
  actions: Actions;
}

const Login: React.FC<Props> = (props) => {
  const { presenters, actions } = props;

  useEffect(() => {
    
  }, []);

  return (
    <div>
      로그인 페이지
    </div>
  );
};

export default Login;