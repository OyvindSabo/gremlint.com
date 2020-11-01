import styled from 'styled-components';
import NavigationButton from './NavigationButton';
import router from '../router';
import { white } from '../styleVariables';
import { useRouter } from 'sharp-router';

const NavigatorWrapper = styled.div`
  background: ${white};
  box-shadow: ${white} 0 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavigatorCenterContainer = styled.div`
  width: min(800px, 100vw);
  margin-left: calc(50vw - min(400px, 50vw));
`;

const Spacer = styled.div`
  height: 40px;
`;

const Navigator = () => {
  const { matchedRoute } = useRouter(router);
  return (
    <div>
      <NavigatorWrapper>
        <NavigatorCenterContainer>
          <NavigationButton
            isSelected={matchedRoute === '/'}
            label="Query formatter"
            href="#/"
          />
          <NavigationButton
            isSelected={matchedRoute === '/style-guide'}
            label="Style guide"
            href="#/style-guide"
          />
        </NavigatorCenterContainer>
      </NavigatorWrapper>
      <Spacer />
    </div>
  );
};

module.exports = Navigator;
