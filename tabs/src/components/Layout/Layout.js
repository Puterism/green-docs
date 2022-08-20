import { Global } from '@emotion/react';
import Nav from '../Nav/Nav';
import globalStyle from './globalStyle';
import Styled from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <Global styles={globalStyle} />
      <Nav />
      {children}
    </Styled.Layout>
  );
};

export default Layout;
