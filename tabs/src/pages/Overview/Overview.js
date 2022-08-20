import { useState, useEffect } from 'react';

import Styled from './Overview.styles';
import { Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { people } from '@fluentui/example-data';
import SubTaskBox from '../../components/SubTaskBox/SubTaskBox';

const TestTaskData = [
  {
    id: 1,
    duedate: '10/7',
    title: 'Front Developer',
    description: '설명입니다',
    Assignee: people,
    Score: 5,
    isDone: false,
  },
  { id: 2, duedate: '10/2', title: 'Front Developer', Assignee: people, Score: 6, isDone: false },
  { id: 3, duedate: '10/3', title: 'Front Developer', Assignee: people, Score: 8, isDone: false },
  { id: 4, duedate: '10/4', title: 'Front Developer', Assignee: people, Score: 2, isDone: false },
  {
    id: 5,
    duedate: '10/5',
    title: 'Front Developer',
    description:
      'I did some research and found that the proper way of implementing a user login system is to store the user name/id and the encrypted/hashed',
    Assignee: people,
    Score: 1,
    isDone: false,
  },
  { id: 6, duedate: '10/6', title: 'Front Developer', Assignee: people, Score: 3, isDone: false },
  { id: 7, duedate: '10/7', title: 'Front Developer', Assignee: people, Score: 4, isDone: false },
];

const PersonaDetails = (item, index) => {
  return (
    <Styled.DetailsWrapper key={index}>
      <Persona
        imageUrl={item.imageUrl}
        showSecondaryText={true}
        text={item.imageInitials}
        secondaryText={item.secondaryText}
        size={PersonaSize.size48}
        presence={PersonaPresence.online}
      />
    </Styled.DetailsWrapper>
  );
};

const Overview = () => {
  const [EntireTasks, setEntireTasks] = useState(TestTaskData);
  const [peopleList] = useState(people);

  useEffect(() => {
    console.log(people);
  }, []);

  function toggleTask(task, index) {
    setEntireTasks((prevTasks) => {
      const nextTasks = [...prevTasks];
      nextTasks[index] = { ...task, isDone: !task.isDone };
      return nextTasks;
    });
  }

  return (
    <Styled.Content>
      <Styled.Title>Team</Styled.Title>
      <Styled.PersonasContainer>
        {Object.values(peopleList).map((item, index) => index < 5 && PersonaDetails(item, index))}
      </Styled.PersonasContainer>

      <Styled.Title>Sub Task this week</Styled.Title>
      <Styled.EntireTasks>
        {EntireTasks.map((task, index) => (
          <SubTaskBox task={task} onClick={() => toggleTask(task, index)}></SubTaskBox>
        ))}
      </Styled.EntireTasks>
    </Styled.Content>
  );
};

export default Overview;
