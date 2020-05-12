import * as React from "react";
import AuthBox from '../organisms/AuthBox';

interface IProps {
  accredit(id: string, pw: string): void;
  btnValue: string;
}

const Authorization: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props;

  return (
    <div className={"authorization"}>
      <AuthBox accredit={accredit} btnValue={btnValue} />
    </div>
  );
};

export default Authorization;