import { DatePicker, Text, TextField, PrimaryButton, NormalPeoplePicker } from '@fluentui/react';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Styled from './Home.styles';

import HeadTitle from '../../components/HeadTitle/HeadTitle';
import { Pivot, PivotItem } from '@fluentui/react';
import Overview from '../Overview/Overview';
import usePeoplePicker from '../../hooks/usePeoplePicker';
import useInput from '../../hooks/useInput';
import useDatePicker from '../../hooks/useDatePicker';
import { getTextFromItem, validateInput, onInputChange } from '../../utils/peoplePicker';
import { Link } from 'react-router-dom';

const Home = () => {
  const { picker, onFilterChanged, returnMostRecentlyUsed, onRemoveSuggestion, onItemChange } =
    usePeoplePicker();

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

      <Styled.Home>
        <HeadTitle name={'sonminji'} />
        <Styled.PivotWrapper>
          <Pivot aria-label="Basic Pivot Example">
            <PivotItem headerText="Overview">
              <Link to="/detail/1">
                <Overview />
              </Link>
            </PivotItem>

            <PivotItem headerText="Objectives">
              <Overview />
            </PivotItem>

            <PivotItem headerText="Tasks">
              <Overview />
            </PivotItem>

            <PivotItem headerText="Sub Tasks">
              <Overview />
            </PivotItem>
          </Pivot>
        </Styled.PivotWrapper>
      </Styled.Home>
    </Layout>
  );
};

export default Home;
