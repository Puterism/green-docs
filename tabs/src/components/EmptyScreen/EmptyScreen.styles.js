import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    max-width: 300px;
    max-height: 300px;
    margin-top: 64px;
  }
`;

const SvgWrapper = styled.div``;

export default {
  Container,
  SvgWrapper,
};
