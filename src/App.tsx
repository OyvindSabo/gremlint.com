import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { useRouter } from 'sharp-router';
import router from './router';
import FadeIn from './components/FadeIn';
import Navigator from './components/Navigator';
import QueryFormatter from './views/QueryFormatter';
import StyleGuide from './views/StyleGuide';
import LoadingAnimation from './components/LoadingAnimation';

const ViewWrapper = styled.div`
  width: min(800px, 100vw);
  margin-left: calc(50vw - min(400px, 50vw));
`;

const App = () => {
  const { matchedRoute } = useRouter(router);
  const [loadingComplete, setLoadingComplete] = useState(false);
  if (!loadingComplete)
    return (
      <LoadingAnimation onLoadingComplete={() => setLoadingComplete(true)} />
    );
  return (
    <FadeIn>
      <div>
        <Navigator matchedRoute={matchedRoute} />
        <div>
          <ViewWrapper>
            {matchedRoute === '/' ? (
              <QueryFormatter />
            ) : matchedRoute === '/style-guide' ? (
              <StyleGuide />
            ) : null}
          </ViewWrapper>
        </div>
      </div>
    </FadeIn>
  );
};

export default App;
