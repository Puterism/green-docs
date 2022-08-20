import styled from '@emotion/styled';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px;
  gap: 10px;
  width: 320px;
  height: 165px;
  background: #ffffff;
  box-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13);
  border-radius: 2px;
  padding: 24px;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

const Date = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #605e5c;
`;

const Divider = styled.div`
  margin: 0;
  width: 100%;
  height: 1px;
  background-color: #edebe9;
`;

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
`;

const ProgressBar = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProgressText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  margin-right: 10px;
  color: #605e5c;
`;

const PersonaList = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
`;

export default {
  Content,
  Title,
  Date,
  Divider,
  ProgressIndicatorWrapper,
  ProgressText,
  ProgressBar,
  PersonaList,
};
