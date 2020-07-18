import * as React from "react";
import AuthForm from '../boxs/AuthForm';

interface IProps {
  accredit(id: string, pw: string): void;
  btnValue: string;
}

const AuthBox: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props;

  return (
    <div className={"authorization-box"}>
      <AuthForm accredit={accredit} btnValue={btnValue} />
    </div>
  );
};

export default AuthBox;