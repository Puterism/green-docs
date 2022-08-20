import {
  Breadcrumb,
  ChoiceGroup,
  DatePicker,
  Facepile,
  NormalPeoplePicker,
  PersonaSize,
  PrimaryButton,
  ProgressIndicator,
  Text,
  TextField,
} from '@fluentui/react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import useDatePicker from '../../hooks/useDatePicker';
import useInput from '../../hooks/useInput';
import usePeoplePicker from '../../hooks/usePeoplePicker';
import { getTextFromItem, onInputChange, validateInput } from '../../utils/peoplePicker';
import Styled from './Detail.styles';
import { facepilePersonas } from '@fluentui/example-data';
import SubTaskBox from '../../components/SubTaskBox/SubTaskBox';
import { people } from '@fluentui/example-data';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';

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

const breadcrumbItems = [
  { text: 'Objectives', key: 'objectives-title' },
  { text: 'Increase organic user', key: 'Increase organic user' },
  { text: 'blabla task name', key: 'blabla task name' },
  { text: 'blabla task name 1', key: 'blabla task name 1' },
];

const numberOfFaces = 5;

const Detail = () => {
  const { picker, onFilterChanged, returnMostRecentlyUsed, onRemoveSuggestion, onItemChange } =
    usePeoplePicker();

  const [loading, setIsLoading] = useState(false);

  const { id } = useParams();

  const [type, setType] = useState({ key: 'task', text: 'Task' });
  const [name, onChangeName] = useInput('');
  const [dueDate, onSelectDueDate] = useDatePicker('');
  const [description, onChangeDescription] = useInput('');
  const [score, onChangeScore] = useInput('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeType = (event, option) => {
    setType(option);
  };

  const isValidForm = name.trim() !== '';
  const personas = useMemo(() => facepilePersonas.slice(0, numberOfFaces), []);

  return (
    <Layout>
      <Sidebar>
        <Styled.SidebarContent>
          <Text variant="large">New Task/Sub Task</Text>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormField>
              <ChoiceGroup
                defaultSelectedKey="task"
                options={[
                  { key: 'task', text: 'Task' },
                  { key: 'sub-task', text: 'Sub Task' },
                ]}
                onChange={handleChangeType}
                label="Type"
                required
              />
            </Styled.FormField>
            <Styled.FormField>
              <TextField
                label={`${type.text} name`}
                required
                value={name}
                onChange={onChangeName}
              />
            </Styled.FormField>
            <Styled.FormField>
              <DatePicker
                label="Due Date"
                placeholder="Select a date..."
                ariaLabel="Select a date"
                value={dueDate}
                onSelectDate={onSelectDueDate}
              />
            </Styled.FormField>
            <Styled.FormField>
              <TextField label="Description" value={description} onChange={onChangeDescription} />
            </Styled.FormField>
            <Styled.FormField>
              <TextField label="Score" type="number" value={score} onChange={onChangeScore} />
            </Styled.FormField>
            <Styled.FormField>
              <Text as="label" style={{ display: 'block', fontWeight: '600', padding: '5px 0px' }}>
                Assignee
              </Text>
              <NormalPeoplePicker
                onResolveSuggestions={onFilterChanged}
                onEmptyInputFocus={returnMostRecentlyUsed}
                getTextFromItem={getTextFromItem}
                pickerSuggestionsProps={{
                  suggestionsHeaderText: 'Suggested People',
                  mostRecentlyUsedHeaderText: 'Suggested Contacts',
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading',
                  showRemoveButtons: true,
                  suggestionsAvailableAlertText: 'People Picker Suggestions available',
                  suggestionsContainerAriaLabel: 'Suggested contacts',
                }}
                onRemoveSuggestion={onRemoveSuggestion}
                onValidateInput={validateInput}
                onItemChange={onItemChange}
                removeButtonAriaLabel={'Remove'}
                inputProps={{
                  onBlur: (event) => console.log('onBlur called'),
                  onFocus: (event) => console.log('onFocus called'),
                }}
                componentRef={picker}
                onInputChange={onInputChange}
                resolveDelay={300}
              />
            </Styled.FormField>
            <Styled.SubmitField>
              <PrimaryButton text="Create" disabled={!isValidForm} />
            </Styled.SubmitField>
          </Styled.Form>
        </Styled.SidebarContent>
      </Sidebar>
      {loading ? (
        <EmptyScreen
          title={'Task or Sub Task created in this workspace will appear here'}
          image={'ChartWomen'}
        ></EmptyScreen>
      ) : (
        <Styled.Detail>
          <Breadcrumb items={breadcrumbItems} maxDisplayedItems={3} overflowIndex={1} />
          <Styled.DescriptionWrapper>
            <Text variant="medium">
              When you think of SEO and ways to increase organic traffic, your mind likely jumps
              straight to keyword research and tools like SEMrush. But there’s an easier, more
              effective method. We’re going to teach you why user-generated content (UGC), like
              customer ratings and reviews, images, and videos, is all you need to boost your SEO
              strategy.
            </Text>
          </Styled.DescriptionWrapper>
          <Styled.DueDateWrapper>
            <Text variant={'large'}>Until 2022/09/01</Text>
          </Styled.DueDateWrapper>
          <Styled.FacepileWrapper>
            <Facepile personaSize={PersonaSize.size32} personas={personas} />
          </Styled.FacepileWrapper>
          <Styled.ProgressIndicator>
            <ProgressIndicator percentComplete={0.5} />
          </Styled.ProgressIndicator>

          <Styled.TaskCardListWrapper>
            <Text variant="large">Tasks</Text>
            <Styled.TaskCardList>
              {TestTaskData.map((task, index) => (
                <SubTaskBox key={task.id} task={task} onClick={() => toggleTask(task, index)} />
              ))}
            </Styled.TaskCardList>
          </Styled.TaskCardListWrapper>
          <h2>ID: {id}</h2>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
          </ul>
        </Styled.Detail>
      )}
    </Layout>
  );
};

export default Detail;
