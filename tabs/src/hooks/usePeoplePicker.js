import { useRef, useState } from 'react';
import { doesTextStartWith, removeDuplicates } from '../utils/peoplePicker';
import { people, mru } from '@fluentui/example-data';

const usePeoplePicker = () => {
  const [mostRecentlyUsed, setMostRecentlyUsed] = useState(mru);
  const [peopleList, setPeopleList] = useState(people);

  const picker = useRef(null);

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

  const onItemChange = (changedItem) => {
    console.log(changedItem);
  };

  return {
    picker,
    onFilterChanged,
    returnMostRecentlyUsed,
    onRemoveSuggestion,
    onItemChange,
  };
};

export default usePeoplePicker;
