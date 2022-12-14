import Styled from './SubTaskBox.styles';

import { Checkbox, TooltipHost } from '@fluentui/react';
import { people } from '@fluentui/example-data';
import { Persona, PersonaPresence } from '@fluentui/react/lib/Persona';
import { TestImages } from '@fluentui/example-data';
import { useId } from '@fluentui/react-hooks';

export const PersonaList = (people) => {
  const peopleLen = Object.values(people).length;
  let extraNum = peopleLen > 5 ? peopleLen - 5 : 0;
  return (
    <Styled.PersonaList>
      {Object.values(people).map(
        (item, index) =>
          index < 5 && (
            <Styled.PersonaWrapper key={index}>
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

const SubTaskBox = (props) => {
  const { task, onClick } = props;
  const tooltipId = useId('tooltip');

  return (
    <TooltipHost content={task?.description} id={tooltipId} gapSpace={0}>
      <div onClick={onClick} key={task.id}>
        <Styled.SubTask>
          <Styled.TaskContainer>
            <Styled.TaskInfoBox>
              {task.dueDate && (
                <Styled.Duedate isDone={task.isDone}>Until {task.duedate}</Styled.Duedate>
              )}
              <Styled.Tasktitle isDone={task.isDone}>{task.title}</Styled.Tasktitle>
              {PersonaList(people)}
              <Styled.Score isDone={task.isDone}>Score : {task.Score}</Styled.Score>
            </Styled.TaskInfoBox>
            <Checkbox checked={task.isDone} />
          </Styled.TaskContainer>
        </Styled.SubTask>
      </div>
    </TooltipHost>
  );
};

export default SubTaskBox;
