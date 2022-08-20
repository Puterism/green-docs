import Styled from './HeadTitle.styles';

const HeadTitle = ({ name }) => {
  return (
    <Styled.Content>
      <Styled.Maintitle>Hello, {name}</Styled.Maintitle>
      <Styled.Subtitle>
        Welcome to Junction Asia workspace. Find your goals and tasks!
      </Styled.Subtitle>
    </Styled.Content>
  );
};

export default HeadTitle;
