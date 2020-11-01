import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { textColor } from '../styleVariables';

const ParagraphWrapper = styled.div<{ $hasContent: boolean }>`
  ${({ $hasContent }) =>
    $hasContent &&
    css`
      padding: 10px;
    `}
`;

const ParagraphContent = styled.span`
  color: ${textColor};
  line-height: 20px;
  font-size: 15px;
`;

const Paragraph = ({ children }: HTMLAttributes<HTMLSpanElement>) => (
  <ParagraphWrapper $hasContent={Boolean(children)}>
    <ParagraphContent>{children}</ParagraphContent>
  </ParagraphWrapper>
);

module.exports = Paragraph;
