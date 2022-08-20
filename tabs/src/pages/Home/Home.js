import { DatePicker, Text, TextField, PrimaryButton } from '@fluentui/react';
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
import { useState } from 'react';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
import Overview from '../Overview/Overview';
import Objectives from '../Objectives/Objectives';
import Tasks from '../Tasks/Tasks';
import SubTasks from '../SubTasks/SubTasks';

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

  const handleInputChange = (event) => {
    console.log(event.target.selectedPeople);
  };

  const [showLoginPage, setShowLoginPage] = useState(false);

  const teamsfx = useRef(null);
  const scope = useRef(null);

  const initGraphToolkit = useCallback(async (teamsfx, scope) => {
    console.log('initGraphToolkit');
    const provider = new TeamsFxProvider(teamsfx, scope);
    Providers.globalProvider = provider;
  }, []);

  const initTeamsFx = useCallback(async () => {
    console.log('initTeamsFx');
    teamsfx.current = new TeamsFx();

    // Only these two permission can be used without admin approval in microsoft tenant
    scope.current = ['User.Read', 'User.ReadBasic.All'];
  }, []);

  const checkIsConsentNeeded = useCallback(async () => {
    console.log('checkIsConsentNeeded');
    let consentNeeded = false;
    try {
      await teamsfx.current.getCredential().getToken(scope.current);
    } catch (error) {
      consentNeeded = true;
    }

    setShowLoginPage(consentNeeded);

    Providers.globalProvider.setState(
      consentNeeded ? ProviderState.SignedOut : ProviderState.SignedIn
    );
    return consentNeeded;
  }, []);

  const loginBtnClick = useCallback(async () => {
    try {
      await teamsfx.current.login(scope.current);
      Providers.globalProvider.setState(ProviderState.SignedIn);
      setShowLoginPage(false);
    } catch (err) {
      if (err.message?.includes('CancelledByUser')) {
        const helpLink = 'https://aka.ms/teamsfx-auth-code-flow';
        err.message +=
          '\nIf you see "AADSTS50011: The reply URL specified in the request does not match the reply URLs configured for the application" ' +
          'in the popup window, you may be using unmatched version for TeamsFx SDK (version >= 0.5.0) and Teams Toolkit (version < 3.3.0) or ' +
          `cli (version < 0.11.0). Please refer to the help link for how to fix the issue: ${helpLink}`;
      }

      alert('Login failed: ' + err);
      return;
    }
  }, []);

  const initialize = useCallback(async () => {
    await initTeamsFx();
    await initGraphToolkit(teamsfx.current, scope.current);
    await checkIsConsentNeeded();
  }, [checkIsConsentNeeded, initGraphToolkit, initTeamsFx]);

  useEffect(() => {
    initialize();
  }, [initialize]);

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
              <Overview />
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
