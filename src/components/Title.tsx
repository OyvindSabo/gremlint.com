import React from 'react';
import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { textColor } from '../styleVariables';

const TitleWrapper = styled.div<{ $hasContent: boolean }>`
  ${({ $hasContent }) =>
    $hasContent &&
    css`
      padding: 10px;
    `}
`;

const TitleContent = styled.div`
  color: ${textColor};
  line-height: 30px;
  font-size: 25px;
`;

const Title = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <TitleWrapper $hasContent={Boolean(children)}>
    <TitleContent>{children}</TitleContent>
  </TitleWrapper>
);

export default Title;
