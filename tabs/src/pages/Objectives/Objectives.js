import { useEffect } from 'react';

import Objectivebox from '../../components/Objectivebox/Objectivebox';
import Styled from './Objectives.styles';
import { people } from '@fluentui/example-data';

const TestData = [
  { id: 1, date: '2022/10/07', title: 'Front Developer', Assignee: people, progress: 0.5 },
  { id: 2, date: '2022/10/02', title: 'Front Developer', Assignee: people, progress: 0.2 },
  { id: 3, date: '2022/10/03', title: 'Front Developer', Assignee: people, progress: 0 },
  { id: 4, date: '2022/10/04', title: 'Front Developer', Assignee: people, progress: 1 },
];

const Objectives = () => {
  useEffect(() => {}, []);

  return (
    <Styled.Content>
      <Styled.ObjectivesContainer>
        {TestData.map((item) => (
          <Objectivebox task={item} />
        ))}
      </Styled.ObjectivesContainer>
    </Styled.Content>
  );
};

export default Objectives;
