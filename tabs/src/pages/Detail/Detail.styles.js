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

export default {
  Detail,
  SidebarContent,
  Form,
  FormField,
  SubmitField,
  DescriptionWrapper,
  FacepileWrapper,
  ProgressIndicator,
};
