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
  duedate: 'Minji',
  title: 'Front Developer',
  Assignee: people,
  Score: 5,
  isDone: true,
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

const PersonaList = () => {
  const peopleLen = Object.values(people).length;
  let extraNum = peopleLen > 5 ? peopleLen - 5 : 0;
  return (
    <Styled.PersonaList>
      {Object.values(people).map(
        (item, index) =>
          index < 5 && (
            <Styled.PersonaWrapper>
              <Persona
                imageUrl={TestImages.personaFemale}
                coinSize={16}
                presence={PersonaPresence.online}
                hidePersonaDetails
              />
            </Styled.PersonaWrapper>
          )
      )}

      {extraNum > 0 && (
        <Styled.NumberBox>
          <Styled.ExtraNumber>+{extraNum}</Styled.ExtraNumber>
        </Styled.NumberBox>
      )}
    </Styled.PersonaList>
  );
};

const TaskBoxs = (Tasks, setTasks) => {
  return (
    <div onClick={() => setTasks((prev) => ({ ...prev, isDone: !Tasks.isDone }))}>
      <Styled.SubTask>
        <Styled.TaskContainer>
          <Styled.TaskInfoBox>
            <Styled.Duedate isDone={Tasks.isDone}>Until {Tasks.duedate}</Styled.Duedate>
            <Styled.Tasktitle isDone={Tasks.isDone}>{Tasks.title}</Styled.Tasktitle>
            {PersonaList()}
            <Styled.Score isDone={Tasks.isDone}>Score : {Tasks.Score}</Styled.Score>
          </Styled.TaskInfoBox>
          <Checkbox checked={Tasks.isDone} />
        </Styled.TaskContainer>
      </Styled.SubTask>
    </div>
  );
};

const Overview = () => {
  const [Tasks, setTasks] = useState(TestTaskData);

  useEffect(() => {
    console.log(people);
  }, []);

  return (
    <Styled.Content>
      <Styled.Title>Team</Styled.Title>
      <Styled.PersonasContainer>
        {Object.values(TestData).map((item) => PersonaDetails(item))}
      </Styled.PersonasContainer>

      <Styled.Title>Sub Task this week</Styled.Title>
      {TaskBoxs(Tasks, setTasks)}
    </Styled.Content>
  );
};

export default Overview;
