import styled from '@emotion/styled';


const PivotWrapper = styled.div`
  padding: 0px 20px;
`;

const Home = styled.div`
  flex: 1;
`;

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
  SidebarContent,
  Form,
  FormField,
  PivotWrapper,
  SubmitField,
};
