import React, { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';

const FadeInWrapper = styled.div<{ $opacity: number }>`
  opacity: ${({ $opacity }) => $opacity};
`;

const FadeIn = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1));
  }, []);

  return (
    <FadeInWrapper $opacity={opacity} {...props}>
      {children}
    </FadeInWrapper>
  );
};

export default FadeIn;
