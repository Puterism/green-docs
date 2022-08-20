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
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import useDatePicker from '../../hooks/useDatePicker';
import useInput from '../../hooks/useInput';
import usePeoplePicker from '../../hooks/usePeoplePicker';
import { getTextFromItem, onInputChange, validateInput } from '../../utils/peoplePicker';
import Styled from './Detail.styles';
import { facepilePersonas } from '@fluentui/example-data';

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

  const { id } = useParams();

  const [type, setType] = useState({ key: 'task', text: 'Task' });
  const [name, onChangeName] = useInput('');
  const [dueDate, onSelectDueDate] = useDatePicker('');
  const [description, onChangeDescription] = useInput('');
  const [score, onChangeScore] = useInput('');

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
        <Styled.FacepileWrapper>
          <Facepile personaSize={PersonaSize.size32} personas={personas} />
        </Styled.FacepileWrapper>
        <Styled.ProgressIndicator>
          <ProgressIndicator percentComplete={0.5} />
        </Styled.ProgressIndicator>

        <h2>ID: {id}</h2>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
        </ul>
      </Styled.Detail>
    </Layout>
  );
};

export default Detail;