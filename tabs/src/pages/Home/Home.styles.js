import styled from '@emotion/styled';

const Home = styled.div``;

const Title = styled.h1``;

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
  Title,
  SidebarContent,
  Form,
  FormField,
  SubmitField,
};
