import styled from '@emotion/styled';

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
`;

const Maintitle = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const Subtitle = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #605e5c;
`;

const CSVBtn = styled.div``;

export default {
  Content,
  Maintitle,
  Subtitle,
  CSVBtn,
};
