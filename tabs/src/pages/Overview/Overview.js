import { useState, useEffect } from 'react';

import Styled from './Overview.styles';
import { TestImages } from '@fluentui/example-data';
import { Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { people } from '@fluentui/example-data';
import SubTaskBox from '../../components/SubTaskBox/SubTaskBox';

const TestData = {
  1: { name: 'Minji', role: 'Front Developer' },
  2: { name: 'MoonSung', role: 'Front Developer' },
  3: { name: 'Sion', role: 'Back Developer' },
  4: { name: 'Beom Soo', role: 'Designer' },
  5: { name: 'Gabin', role: 'Entrepreneur' },
};

const TestTaskData = [
  { id: 1, duedate: '10/7', title: 'Front Developer', Assignee: people, Score: 5, isDone: false },
  { id: 2, duedate: '10/2', title: 'Front Developer', Assignee: people, Score: 6, isDone: false },
  { id: 3, duedate: '10/3', title: 'Front Developer', Assignee: people, Score: 8, isDone: false },
  { id: 4, duedate: '10/4', title: 'Front Developer', Assignee: people, Score: 2, isDone: false },
  { id: 5, duedate: '10/5', title: 'Front Developer', Assignee: people, Score: 1, isDone: false },
  { id: 6, duedate: '10/6', title: 'Front Developer', Assignee: people, Score: 3, isDone: false },
  { id: 7, duedate: '10/7', title: 'Front Developer', Assignee: people, Score: 4, isDone: false },
];

const PersonaDetails = (item, index) => {
  const { name, role } = item;
  return (
    <Styled.DetailsWrapper key={index}>
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

const Overview = () => {
  const [EntireTasks, setEntireTasks] = useState(TestTaskData);

  useEffect(() => {}, []);

  return (
    <Styled.Content>
      <Styled.Title>Team</Styled.Title>
      <Styled.PersonasContainer>
        {Object.values(TestData).map((item, index) => PersonaDetails(item, index))}
      </Styled.PersonasContainer>

      <Styled.Title>Sub Task this week</Styled.Title>
      <Styled.EntireTasks>
        {EntireTasks.map((task, index) =>
          SubTaskBox(task, () => {
            setEntireTasks((prevTasks) => {
              const nextTasks = [...prevTasks];
              nextTasks[index] = { ...task, isDone: !task.isDone };
              return nextTasks;
            });
          })
        )}
      </Styled.EntireTasks>
    </Styled.Content>
  );
};

export default Overview;
