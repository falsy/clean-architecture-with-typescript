import * as React from "react";
import styled from 'styled-components';
import AuthBox from '../organisms/AuthBox';

interface IProps {
  accredit(id: string, pw: string): void;
  btnValue: string;
}

const AuthArea = styled.div`
  width: 400px;
  margin: 100px auto;
`;

const Authorization: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props;

  return (
    <AuthArea>
      <AuthBox accredit={accredit} btnValue={btnValue} />
    </AuthArea>
  );
};

export default Authorization;