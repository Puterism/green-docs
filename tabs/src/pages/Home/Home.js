import { DatePicker, Text, TextField, PrimaryButton, NormalPeoplePicker } from '@fluentui/react';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Styled from './Home.styles';

import HeadTitle from '../../components/HeadTitle/HeadTitle';
import { Pivot, PivotItem } from '@fluentui/react';

import usePeoplePicker from '../../hooks/usePeoplePicker';
import useInput from '../../hooks/useInput';
import useDatePicker from '../../hooks/useDatePicker';
import { getTextFromItem, validateInput, onInputChange } from '../../utils/peoplePicker';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
import Overview from '../Overview/Overview';
import Objectives from '../Objectives/Objectives';
import Tasks from '../Tasks/Tasks';
import SubTasks from '../SubTasks/SubTasks';

const Home = () => {
  const { picker, onFilterChanged, returnMostRecentlyUsed, onRemoveSuggestion, onItemChange } =
    usePeoplePicker();

  const [loading, setIsLoading] = useState(false);
  const [objectiveName, onChangeObjectiveName] = useInput('');
  const [dueDate, onSelectDueDate] = useDatePicker('');
  const [description, onChangeDescription] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isValidForm = objectiveName.trim() !== '';

  return (
    <Layout>
      <Sidebar>
        <Styled.SidebarContent>
          <Text variant="large">New Objective</Text>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormField>
              <TextField
                label="Objective name"
                required
                value={objectiveName}
                onChange={onChangeObjectiveName}
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
          title={'Objectives created in this workspace will appear here'}
          image={'CheckmarkWaiter'}
        ></EmptyScreen>
      ) : (
        <Styled.Home>
          <HeadTitle name={'sonminji'} />
          <Styled.PivotWrapper>
            <Pivot aria-label="Basic Pivot Example">
              <PivotItem headerText="Overview">
                <Overview />
              </PivotItem>

              <PivotItem headerText="Objectives">
                <Objectives />
              </PivotItem>

              <PivotItem headerText="Tasks">
                <Tasks />
              </PivotItem>

              <PivotItem headerText="SubTasks">
                <SubTasks />
              </PivotItem>
            </Pivot>
            <Link to="/detail/1">Detail</Link>
          </Styled.PivotWrapper>
        </Styled.Home>
      )}
    </Layout>
  );
};

export default Home;
