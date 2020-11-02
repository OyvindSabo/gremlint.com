import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { white } from '../styleVariables';

const LoadingAnimationWrapper = styled.div`
  position: fixed;
  background: ${white};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const GrayscaleImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  bottom: calc(50vh - 25vmin);
`;

const ColoredImageWrapper = styled.div<{ $loadingCompletion: number }>`
  overflow: hidden;
  height: ${({ $loadingCompletion }) => $loadingCompletion / 2}vmin;
  width: 100%;
  position: absolute;
  bottom: calc(50vh - 25vmin);
`;

const Image = styled.img<{ $opacity: number }>`
  opacity: ${({ $opacity }) => $opacity};
  transition: 0.25s;
  height: 50vmin;
  width: 50vmin;
  display: block;
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

type LoadingAnimationProps = {
  onLoadingComplete: VoidFunction;
};

const LoadingAnimation = ({ onLoadingComplete }: LoadingAnimationProps) => {
  const [loadingCompletion, setLoadingCompletion] = useState(0);
  const [coloredImageHasLoaded, setColoredImageHasLoaded] = useState(false);
  const [grayscaleImageHasLoaded, setGrayscaleImageHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        if (loadingCompletion < 100) {
          if (coloredImageHasLoaded && grayscaleImageHasLoaded) {
            setLoadingCompletion(loadingCompletion + 1);
          }
        } else {
          setTimeout(onLoadingComplete, 250);
        }
      },
      loadingCompletion === 0 ? 250 : 10,
    );
  }, [
    loadingCompletion,
    coloredImageHasLoaded,
    grayscaleImageHasLoaded,
    onLoadingComplete,
  ]);

  return (
    <LoadingAnimationWrapper>
      <GrayscaleImageWrapper>
        <Image
          src="https://gremlint.com/wp-content/uploads/2020/07/Lowpoly-Gremlin-with-Text-Grayscale-1080x1080-1.png"
          $opacity={
            grayscaleImageHasLoaded && loadingCompletion !== 100 ? 1 : 0
          }
          onLoad={() => setGrayscaleImageHasLoaded(true)}
        />
      </GrayscaleImageWrapper>
      <ColoredImageWrapper $loadingCompletion={loadingCompletion}>
        <Image
          src="https://gremlint.com/wp-content/uploads/2020/07/Lowpoly-Gremlin-with-Text-1080x1080-1.png"
          $opacity={loadingCompletion !== 100 ? 1 : 0}
          onLoad={() => setColoredImageHasLoaded(true)}
        />
      </ColoredImageWrapper>
    </LoadingAnimationWrapper>
  );
};

export default LoadingAnimation;
