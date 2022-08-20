import Styled from './Objectivebox.styles';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';
import { people } from '@fluentui/example-data';
import { PersonaList } from '../SubTaskBox/SubTaskBox';
import { Link } from 'react-router-dom';

const Objectivebox = (props) => {
  const { title, date, progress, id } = props.task;

  return (
    <Styled.Container>
      <Link to={`/detail/:${id}`}>
        <Styled.Content key={id}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Divider />
          <Styled.PersonaList>{PersonaList(people)}</Styled.PersonaList>

          <Styled.Date>{date}</Styled.Date>
          <Styled.ProgressBar>
            <Styled.ProgressText>{progress * 100}%</Styled.ProgressText>
            <Styled.ProgressIndicatorWrapper>
              <ProgressIndicator percentComplete={progress} progressHidden={false} />
            </Styled.ProgressIndicatorWrapper>
          </Styled.ProgressBar>
        </Styled.Content>
      </Link>
    </Styled.Container>
  );
};

export default Objectivebox;
