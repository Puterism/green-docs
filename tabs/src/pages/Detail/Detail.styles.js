import styled from '@emotion/styled';

const Detail = styled.div``;

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
  Detail,
  SidebarContent,
  Form,
  FormField,
  SubmitField,
};
