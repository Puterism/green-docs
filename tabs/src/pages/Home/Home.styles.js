import styled from '@emotion/styled';

const Home = styled.div`
  flex: 1;
`;

const PivotWrapper = styled.div`
  padding: 0px 20px;
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

export default {
  Home,
  SidebarContent,
  Form,
  FormField,
  PivotWrapper,
  SubmitField,
};
