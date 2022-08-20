import { Global } from '@emotion/react';
import Nav from '../Nav/Nav';
import globalStyle from './globalStyle';
import Styled from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <Styled.Layout>
      <Global styles={globalStyle} />
      <Nav />
      <Styled.Content>{children}</Styled.Content>
    </Styled.Layout>
  );
};

export default Layout;
