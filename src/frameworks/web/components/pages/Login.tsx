import * as React from "react";
import { useDispatch } from "react-redux";
import di from '@di/index';
import Authorization from '../templates/authorization';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickAccreditation = async (id: string, pw: string) => {
    dispatch(await di.session.login(id, pw));
  };

  return (
    <div className={"login"}>
      <Authorization accredit={handleClickAccreditation} btnValue="Login" />
    </div>
  );
};


export default Login;