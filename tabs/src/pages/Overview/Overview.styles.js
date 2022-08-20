import styled from '@emotion/styled';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 8px;
`;

const PersonasContainer = styled.div`
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

const Assignee = styled.p`
  margin: 0;
`;

const EntireTasks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
`;

export default {
  Content,
  Title,
  PersonasContainer,
  DetailsWrapper,
  Assignee,
  EntireTasks,
};
