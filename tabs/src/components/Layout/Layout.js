import { Global } from '@emotion/react';
import globalStyle from './globalStyle';
import Styled from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <Global styles={globalStyle} />
      {children}
    </Styled.Layout>
  );
};

export default Layout;
