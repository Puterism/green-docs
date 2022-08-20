import styled from '@emotion/styled';

const Home = styled.div`
  flex: 1;
  overflow: scroll;
`;

const PivotWrapper = styled.div`
  padding: 20px;
`;

const SidebarContent = styled.div`
  padding: 32px 20px;

  & span:first-of-type {
    font-weight: 600;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;
`;

const FormField = styled.div`
  & + & {
    padding-top: 26px;
  }
`;

const SubmitField = styled.div`
  margin-top: 70px;
  text-align: right;
`;

export default {
  Home,
  SidebarContent,
  Form,
  FormField,
  PivotWrapper,
  SubmitField,
};
