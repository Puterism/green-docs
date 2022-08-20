import { useEffect, useState } from 'react';

import Styled from '../Objectives/Objectives.styles';
import SubTaskBox from '../../components/SubTaskBox/SubTaskBox';
import { TestTaskData } from '../Overview/Overview';

const SubTasks = () => {
  const [EntireTasks, setEntireTasks] = useState(TestTaskData);

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
      <Styled.ObjectivesContainer>
        {EntireTasks.map((task, index) => (
          <SubTaskBox task={task} onClick={() => toggleTask(task, index)} />
        ))}
      </Styled.ObjectivesContainer>
    </Styled.Content>
  );
};

export default SubTasks;
