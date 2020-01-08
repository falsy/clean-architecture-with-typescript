import * as React from "react";
import { useEffect } from "react";

interface Props {
  presenters: any;
}

const Layout: React.FC<Props> = (props) => {
  const { presenters } = props;
  
  useEffect(() => {
    const asyncFnc = async () => {
      const result = await presenters.session.login('id', 'pw');
      console.log(result);
    };
    asyncFnc();
  }, []);

  return (
    <div>
      hello world
    </div>
  );
};

export default Layout;