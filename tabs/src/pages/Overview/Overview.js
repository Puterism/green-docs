import { useState, useEffect } from 'react';

import Styled from './Overview.styles';
import { TestImages } from '@fluentui/example-data';
import { Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { Checkbox } from '@fluentui/react';
import { people } from '@fluentui/example-data';

const TestData = {
  1: { name: 'Minji', role: 'Front Developer' },
  2: { name: 'MoonSung', role: 'Front Developer' },
  3: { name: 'Sion', role: 'Back Developer' },
  4: { name: 'Beom Soo', role: 'Designer' },
  5: { name: 'Gabin', role: 'Entrepreneur' },
};

const TestTaskData = {
  1: { duedate: 'Minji', title: 'Front Developer', Assignee: ['minji'], Score: 5, isDone: true },
};

const PersonaDetails = (item) => {
  const { name, role } = item;
  return (
    <Styled.DetailsWrapper>
      <Persona
        imageUrl={TestImages.personaFemale}
        showSecondaryText={true}
        text={name}
        secondaryText={role}
        size={PersonaSize.size48}
        presence={PersonaPresence.online}
      />
    </Styled.DetailsWrapper>
  );
};

const TaskBox = () => {
  return (
    <Styled.TaskContainer>
      <Styled.TaskInfoBox>
        <Styled.Duedate>Until 10/7</Styled.Duedate>
        <Styled.Tasktitle>Tasktitle</Styled.Tasktitle>
        <Styled.Assignee>Assignee</Styled.Assignee>
        <Styled.Score>Score</Styled.Score>
      </Styled.TaskInfoBox>

      <Checkbox onChange={() => console.log('checked')} />
    </Styled.TaskContainer>
  );
};

const Overview = () => {
  const [Tasks, setTasks] = useState(TestTaskData);

  useEffect(() => {
    //Get Task Data
    console.log(people);
  }, []);

  return (
    <Styled.Content>
      <Styled.Title>Team</Styled.Title>
      <Styled.PersonaWrapper>
        {Object.values(TestData).map((item) => PersonaDetails(item))}
      </Styled.PersonaWrapper>

      <Styled.Title>Sub Task this week</Styled.Title>
      {TaskBox()}
    </Styled.Content>
  );
};

export default Overview;
