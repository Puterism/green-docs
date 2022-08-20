import styled from '@emotion/styled';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  background: #019e79;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

const SearchBoxWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  opacity: 0.8;
`;

const PersonaWrapper = styled.div`
  padding: 0 10px;
`;

export default {
  Nav,
  Title,
  SearchBoxWrapper,
  PersonaWrapper,
};
