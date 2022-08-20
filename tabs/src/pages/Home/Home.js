import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, Text, TextField } from '@fluentui/react';
import { NormalPeoplePicker, ValidationState } from '@fluentui/react/lib/Pickers';
import { people, mru } from '@fluentui/example-data';
import Layout from '../../components/Layout/Layout';
import Sidebar from '../../components/Sidebar/Sidebar';
import Styled from './Home.styles';
import HeadTitle from '../../components/HeadTitle/HeadTitle';
import { Pivot, PivotItem } from '@fluentui/react';

import Overview from '../Overview/Overview';

const suggestionProps = {
  suggestionsHeaderText: 'Suggested People',
  mostRecentlyUsedHeaderText: 'Suggested Contacts',
  noResultsFoundText: 'No results found',
  loadingText: 'Loading',
  showRemoveButtons: true,
  suggestionsAvailableAlertText: 'People Picker Suggestions available',
  suggestionsContainerAriaLabel: 'Suggested contacts',
};

const Home = () => {
  const [mostRecentlyUsed, setMostRecentlyUsed] = useState(mru);
  const [peopleList, setPeopleList] = useState(people);

  const picker = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const filterPersonasByText = (filterText) => {
    return peopleList.filter((item) => doesTextStartWith(item.text, filterText));
  };

  const filterPromise = (personasToReturn) => {
    return personasToReturn;
  };

  const returnMostRecentlyUsed = (currentPersonas) => {
    return filterPromise(removeDuplicates(mostRecentlyUsed, currentPersonas));
  };

  const onRemoveSuggestion = (item) => {
    const indexPeopleList = peopleList.indexOf(item);
    const indexMostRecentlyUsed = mostRecentlyUsed.indexOf(item);

    if (indexPeopleList >= 0) {
      const newPeople = peopleList
        .slice(0, indexPeopleList)
        .concat(peopleList.slice(indexPeopleList + 1));
      setPeopleList(newPeople);
    }

    if (indexMostRecentlyUsed >= 0) {
      const newSuggestedPeople = mostRecentlyUsed
        .slice(0, indexMostRecentlyUsed)
        .concat(mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
      setMostRecentlyUsed(newSuggestedPeople);
    }
  };

  const onFilterChanged = (filterText, currentPersonas, limitResults) => {
    if (filterText) {
      let filteredPersonas = filterPersonasByText(filterText);

      filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
      filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
      return filterPromise(filteredPersonas);
    } else {
      return [];
    }
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
                pickerSuggestionsProps={suggestionProps}
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

      <div>
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
      </div>
    </Layout>
  );
};

export default Home;

function doesTextStartWith(text, filterText) {
  return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
}

function removeDuplicates(personas, possibleDupes) {
  return personas.filter((persona) => !listContainsPersona(persona, possibleDupes));
}

function listContainsPersona(persona, personas) {
  if (!personas || !personas.length || personas.length === 0) {
    return false;
  }
  return personas.filter((item) => item.text === persona.text).length > 0;
}

function getTextFromItem(persona) {
  return persona.text;
}

function validateInput(input) {
  if (input.indexOf('@') !== -1) {
    return ValidationState.valid;
  } else if (input.length > 1) {
    return ValidationState.warning;
  } else {
    return ValidationState.invalid;
  }
}

function onInputChange(input) {
  const outlookRegEx = /<.*>/g;
  const emailAddress = outlookRegEx.exec(input);

  if (emailAddress && emailAddress[0]) {
    return emailAddress[0].substring(1, emailAddress[0].length - 1);
  }

  return input;
}
