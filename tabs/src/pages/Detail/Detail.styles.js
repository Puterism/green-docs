import styled from '@emotion/styled';

const Detail = styled.div`
  padding: 8px 24px;
  flex: 1;
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-top: 26px;
`;

const FormField = styled.div`
  & + & {
    margin-top: 26px;
  }
`;

const SubmitField = styled.div`
  margin-top: 70px;
  text-align: right;
`;

const DescriptionWrapper = styled.div`
  padding: 8px;
  margin-bottom: 24px;
`;

const FacepileWrapper = styled.div`
  padding: 0 8px;
`;

const ProgressIndicator = styled.div`
  padding: 16px 8px;
`;

const DueDateWrapper = styled.div`
  padding: 0 8px;
  margin-bottom: 24px;

  & span {
    font-weight: 600;
  }
`;

const TaskCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  & span {
    font-weight: 600;
    margin-bottom: 22px;
  }
`;

const TaskCardList = styled.div`
  display: flex;
  max-width: 100vw;
  flex-wrap: wrap;
`;

export default {
  Detail,
  SidebarContent,
  Form,
  FormField,
  SubmitField,
  DescriptionWrapper,
  FacepileWrapper,
  ProgressIndicator,
  DueDateWrapper,
  TaskCardListWrapper,
  TaskCardList,
};
