import styled from '@emotion/styled';

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

export default {
  SidebarContent,
  Form,
  FormField,
  PivotWrapper,
};
