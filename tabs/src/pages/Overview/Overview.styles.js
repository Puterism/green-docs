import styled from '@emotion/styled';

const Content = styled.div`
  padding: 0 8px;
`;

const PersonaWrapper = styled.div`
  display: flex;
`;

const DetailsWrapper = styled.div`
  margin-right: 32px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  padding: 32px 0;
  margin: 0;
`;

const TaskContainer = styled.div`
  width: 320px;
  height: 143px;
  background: #ffffff;
  box-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13);
  border-radius: 2px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskInfoBox = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Duedate = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #605e5c;
`;

const Tasktitle = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
`;

const Assignee = styled.p`
  margin: 0;
`;
const Score = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0078d4;
`;

export default {
  Content,
  Title,
  TaskInfoBox,
  PersonaWrapper,
  DetailsWrapper,
  TaskContainer,
  Duedate,
  Tasktitle,
  Score,
  Assignee,
};
