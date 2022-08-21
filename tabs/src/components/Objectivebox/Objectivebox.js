import Styled from './Objectivebox.styles';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';
import { people } from '@fluentui/example-data';
import { PersonaList } from '../SubTaskBox/SubTaskBox';
import { Link } from 'react-router-dom';
import { TooltipHost } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';

const Objectivebox = (props) => {
  const { id, title, description, dueDate } = props.task;

  const tooltipId = useId('tooltip');

  return (
    <TooltipHost content={description} id={tooltipId} gapSpace={0}>
      <Link to={`/detail/:${title}`} style={{ textDecoration: 'none', color: 'rgb(50, 49, 48)' }}>
        <Styled.Content key={id}>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Divider />
          <Styled.PersonaList>{PersonaList(people)}</Styled.PersonaList>
          <Styled.Date>{dueDate}</Styled.Date>
          <Styled.ProgressBar>
            <Styled.ProgressText>{0 * 100}%</Styled.ProgressText>
            <Styled.ProgressIndicatorWrapper>
              <ProgressIndicator percentComplete={0} progressHidden={false} />
            </Styled.ProgressIndicatorWrapper>
          </Styled.ProgressBar>
        </Styled.Content>
      </Link>
    </TooltipHost>
  );
};

export default Objectivebox;
