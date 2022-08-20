import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CenterLine = (props) => {
  return props.isDone
    ? css`
        text-decoration-line: line-through;
      `
    : null;
};

const Content = styled.div`
  padding: 0 8px;
`;

const PersonasContainer = styled.div`
  display: flex;
`;

const PersonaWrapper = styled.div`
  margin-right: 4px;
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
  max-width: 100%;
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
  ${CenterLine};
`;

const Tasktitle = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  ${CenterLine};
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
  ${CenterLine};
`;

const PersonaList = styled.div`
  display: flex;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const NumberBox = styled.div`
  height: 16px;
  background: #f3f2f1;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
`;

const ExtraNumber = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #201f1e;
`;

const SubTask = styled.div`
  width: 320px;
`;

export default {
  Content,
  Title,
  TaskInfoBox,
  PersonaWrapper,
  PersonasContainer,
  DetailsWrapper,
  TaskContainer,
  Duedate,
  Tasktitle,
  Score,
  Assignee,
  PersonaList,
  NumberBox,
  ExtraNumber,
  SubTask,
};
