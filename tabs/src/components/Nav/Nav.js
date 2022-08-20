import Styled from './Nav.styles';
import { Persona, PersonaPresence, PersonaSize, SearchBox } from '@fluentui/react';
import { TestImages } from '@fluentui/example-data';

const Nav = () => {
  return (
    <Styled.Nav>
      <Styled.Title>Green Docs</Styled.Title>
      <Styled.SearchBoxWrapper>
        <SearchBox
          showIcon
          placeholder="Search"
          iconProps={{ iconName: 'Search' }}
          onSearch={(newValue) => console.log('value is ' + newValue)}
        />
      </Styled.SearchBoxWrapper>
      <Styled.PersonaWrapper>
        <Persona
          imageUrl={TestImages.personaFemale}
          size={PersonaSize.size32}
          presence={PersonaPresence.online}
          hidePersonaDetails
        />
      </Styled.PersonaWrapper>
    </Styled.Nav>
  );
};

export default Nav;
