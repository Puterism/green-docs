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

export default {
  Home,
  Title,
  SidebarContent,
  Form,
  FormField,
};
