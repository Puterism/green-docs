import { useEffect, useRef, useState } from 'react';
import { DatePicker, Text, TextField, PrimaryButton } from '@fluentui/react';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Styled from './Home.styles';

import HeadTitle from '../../components/HeadTitle/HeadTitle';
import { Pivot, PivotItem } from '@fluentui/react';

import Overview from '../Overview/Overview';
import Objectives from '../Objectives/Objectives';
import SubTasks from '../SubTasks/SubTasks';
import Tasks from '../Tasks/Tasks';
import useInput from '../../hooks/useInput';
import useDatePicker from '../../hooks/useDatePicker';
import { PeoplePicker } from '@microsoft/mgt-react';

import { Providers, ProviderState } from '@microsoft/mgt-element';
import { TeamsFxProvider } from '@microsoft/mgt-teamsfx-provider';
import { useCallback } from 'react';
import { TeamsFx } from '@microsoft/teamsfx';
import EmptyScreen from '../../components/EmptyScreen/EmptyScreen';
import { Link } from 'react-router-dom';
import { people } from '@fluentui/example-data';
import { nanoid } from 'nanoid';

const testData = [
  {
    id: 1,
    dueDate: '2022/11/08',
    title: 'Reach a new annual revenue record.',
    Assignee: people,
    progress: 0.5,
  },
  {
    id: 2,
    dueDate: '2022/12/20',
    title: 'Successfully launch our new product',
    Assignee: people,
    progress: 0.5,
  },
  {
    id: 3,
    dueDate: '2022/10/12',
    title: 'Successfully position ourselves in the European market.',
    Assignee: people,
    progress: 0.5,
  },
];

const Home = () => {
  const [username, setUsername] = useState('');

  const [loading] = useState(false);
  const [objectiveName, onChangeObjectiveName, setObjectiveName] = useInput('');
  const [dueDate, onSelectDueDate, setDueDate] = useDatePicker('');
  const [description, onChangeDescription, setDescription] = useInput('');
  const [selectedPeople, setSelectedPeople] = useState([]);

  const [objectiveList, setObjectiveList] = useState(testData);

  const handleSubmitObjective = async (event) => {
    event.preventDefault();

    console.log(selectedPeople, objectiveName, dueDate, description);

    setObjectiveList((prevList) => {
      return [
        ...prevList,
        {
          id: nanoid(),
          title: objectiveName,
          description,
          dueDate: dueDate.toDateString(),
          selectedPeople: selectedPeople.map((person) => person.id),
          childTasks: [],
        },
      ];
    });

    setObjectiveName('');
    setDueDate('');
    setDescription('');

    // const objectiveList = JSON.parse(localStorage.getItem('objectiveList')) ?? [];

    // localStorage.setItem(
    //   'objectiveList',
    //   JSON.stringify([
    //     ...objectiveList,
    //     {
    //       id: nanoid(),
    //       objectiveName,
    //       description,
    //       dueDate,
    //       selectedPeople: selectedPeople.map((person) => person.id),
    //       childTasks: [],
    //     },
    //   ])
    // );
  };

  const isValidForm = objectiveName.trim() !== '';

  const handleInputChange = (event) => {
    setSelectedPeople(event.target.selectedPeople);
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

    const me = await Providers.globalProvider.graph.client.api('me').get();
    setUsername(me.displayName);
  }, [checkIsConsentNeeded, initGraphToolkit, initTeamsFx]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Layout>
      {showLoginPage ? (
        <PrimaryButton primary onClick={loginBtnClick}>
          Start
        </PrimaryButton>
      ) : (
        <>
          <Sidebar>
            <Styled.SidebarContent>
              <Text variant="large">New Objective</Text>
              <Styled.Form onSubmit={handleSubmitObjective}>
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
                  <TextField
                    label="Description"
                    value={description}
                    onChange={onChangeDescription}
                  />
                </Styled.FormField>
                <Styled.FormField>
                  <Text
                    as="label"
                    style={{ display: 'block', fontWeight: '600', padding: '5px 0px' }}
                  >
                    Assignee
                  </Text>
                  <PeoplePicker userType="user" selectionChanged={handleInputChange} />
                </Styled.FormField>
                <Styled.SubmitField>
                  <PrimaryButton type="submit" text="Create" disabled={!isValidForm} />
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
              <HeadTitle name={username} />
              <Styled.PivotWrapper>
                <Pivot aria-label="Basic Pivot Example">
                  <PivotItem headerText="Overview">
                    <Overview />
                  </PivotItem>

                  <PivotItem headerText="Objectives">
                    <Objectives objectiveList={objectiveList} />
                  </PivotItem>

                  <PivotItem headerText="Tasks">
                    <Tasks />
                  </PivotItem>

                  <PivotItem headerText="Sub Tasks">
                    <SubTasks />
                  </PivotItem>
                </Pivot>
                <Link to="/detail/1">Detail</Link>
              </Styled.PivotWrapper>
            </Styled.Home>
          )}
        </>
      )}
    </Layout>
  );
};

export default Home;
