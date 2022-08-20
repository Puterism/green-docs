import {
  ChoiceGroup,
  DatePicker,
  NormalPeoplePicker,
  PrimaryButton,
  Text,
  TextField,
} from '@fluentui/react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import useDatePicker from '../../hooks/useDatePicker';
import useInput from '../../hooks/useInput';
import usePeoplePicker from '../../hooks/usePeoplePicker';
import { getTextFromItem, onInputChange, validateInput } from '../../utils/peoplePicker';
import Styled from './Detail.styles';

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
