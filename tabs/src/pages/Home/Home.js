import { Link } from 'react-router-dom';
import { DatePicker, Text, TextField } from '@fluentui/react';
import { NormalPeoplePicker } from '@fluentui/react/lib/Pickers';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Styled from './Home.styles';
import usePeoplePicker from '../../hooks/usePeoplePicker';
import { getTextFromItem, validateInput, onInputChange } from '../../utils/peoplePicker';

const Home = () => {
  const { picker, onFilterChanged, returnMostRecentlyUsed, onRemoveSuggestion } = usePeoplePicker();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <Sidebar>
        <Styled.SidebarContent>
          <Text variant="large">New Objective</Text>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.FormField>
              <TextField label="Objective name" required />
            </Styled.FormField>
            <Styled.FormField>
              <DatePicker
                label="Due Date"
                placeholder="Select a date..."
                ariaLabel="Select a date"
              />
            </Styled.FormField>
            <Styled.FormField>
              <TextField label="Description" />
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
          </Styled.Form>
        </Styled.SidebarContent>
      </Sidebar>
      <Styled.Home>
        <Styled.Title>홈</Styled.Title>
        <ul>
          <li>
            <Link to="/goals">골</Link>
          </li>
        </ul>
      </Styled.Home>
    </Layout>
  );
};

export default Home;
