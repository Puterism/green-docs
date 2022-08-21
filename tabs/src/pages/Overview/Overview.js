import { useState, useEffect } from 'react';

import Styled from './Overview.styles';
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import { people } from '@fluentui/example-data';
import SubTaskBox from '../../components/SubTaskBox/SubTaskBox';

export const TestTaskData = [
  {
    id: 1,
    duedate: '08/20',
    title: 'Implement Login',
    description: 'Implement Login',
    Assignee: people,
    Score: 5,
    isDone: false,
  },
  { id: 2, duedate: '08/21', title: 'User Interview', Assignee: people, Score: 8, isDone: false },
  { id: 3, duedate: '08/22', title: 'Check Final Demo', Assignee: people, Score: 7, isDone: true },
];

const PersonaDetails = (item, index) => {
  return (
    <Styled.DetailsWrapper key={index}>
      <Persona
        imageUrl={item.imageUrl}
        showSecondaryText={true}
        text={item.text}
        secondaryText={item.secondaryText}
        size={PersonaSize.size48}
        presence={item.presence}
      />
    </Styled.DetailsWrapper>
  );
};

const Overview = () => {
  const [EntireTasks, setEntireTasks] = useState(TestTaskData);
  const [peopleList] = useState([
    {
      secondaryText: 'Frontend Developer',
      text: 'MunSeong Shim',
      isValid: true,
      key: 1,
      presence: 2,
    },
    {
      text: 'Beomsoo Son',
      secondaryText: 'Product Designer',
      isValid: true,
      key: 2,
      presence: 2,
    },
    {
      text: 'Sion Kang',
      secondaryText: 'Backend Developer',
      isValid: true,
      key: 3,
      presence: 2,
    },
    {
      text: 'Min Ji Son',
      secondaryText: 'Frontend Developer',
      isValid: true,
      key: 4,
      presence: 2,
    },
    {
      text: 'Gabin Kim',
      secondaryText: 'Product Manager',
      isValid: true,
      key: 5,
      presence: 2,
    },
  ]);

  useEffect(() => {}, []);

  function toggleTask(task, index) {
    setEntireTasks((prevTasks) => {
      const nextTasks = [...prevTasks];
      nextTasks[index] = { ...task, isDone: !task.isDone };
      return nextTasks;
    });
  }

  return (
    <Styled.Content>
      <div>
        <Styled.Title>Team</Styled.Title>
        <Styled.PersonasContainer>
          {Object.values(peopleList).map((item, index) => index < 5 && PersonaDetails(item, index))}
        </Styled.PersonasContainer>
      </div>

      <div>
        <Styled.Title>SubTask this week</Styled.Title>
        <Styled.EntireTasks>
          {EntireTasks.map((task, index) => (
            <SubTaskBox task={task} onClick={() => toggleTask(task, index)}></SubTaskBox>
          ))}
        </Styled.EntireTasks>
      </div>
    </Styled.Content>
  );
};

export default Overview;
