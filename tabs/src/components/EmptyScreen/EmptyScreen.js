import { Text } from '@fluentui/react';
import CheckmarkWaiter from '../../assets/CheckmarkWaiter';
import Styled from './EmptyScreen.styles';

const EmptyScreen = ({ type }) => {
  return (
    <Styled.Container>
      <Text variant="xLarge">Objectives created in this workspace will appear here</Text>
      <CheckmarkWaiter />
    </Styled.Container>
  );
};

export default EmptyScreen;
