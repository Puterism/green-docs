import { Text } from '@fluentui/react';
import HumanSvg from '../../assets/HumanSvg';
import Styled from './EmptyScreen.styles';

const EmptyScreen = ({ title, image }) => {
  return (
    <Styled.Container>
      <Text variant="xLarge">{title}</Text>
      {image === 'CheckmarkWaiter' ? (
        <HumanSvg.CheckmarkWaiter />
      ) : image === 'ChartWomen' ? (
        <HumanSvg.ChartWomen />
      ) : (
        <HumanSvg.CheckmarkWaiter />
      )}
    </Styled.Container>
  );
};

export default EmptyScreen;
