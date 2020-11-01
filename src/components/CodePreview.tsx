import styled from 'styled-components';
import { HTMLAttributes } from 'react';
import { disabledTextColor, textColor } from '../styleVariables';

const CodePreviewWrapper = styled.div`
  padding: 10px;
`;

const CodePreviewBox = styled.div`
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(0, 0, 0, 0.05);
  outline: none;
  font-size: 15px;
  padding: 10px;
  border: none;
  resize: none;
  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;
  white-space: pre-wrap;
  overflow: auto;
  position: relative;
`;

const Code = styled.div`
  color: ${textColor};
  line-height: 20px;
  font-size: 15px;
`;

const CodeRuler = styled.div<{ $maxLineLength: number }>`
  top: 0;
  left: 0;
  width: calc(10px + ${({ $maxLineLength }) => $maxLineLength}ch);
  border-right: 1px solid ${disabledTextColor};
  position: absolute;
  height: 100%;
  pointer-events: none;
`;

type CodePreviewProps = {
  maxLineLength?: number;
} & HTMLAttributes<HTMLSpanElement>;

const CodePreview = ({ maxLineLength, children }: CodePreviewProps) => (
  <CodePreviewWrapper>
    <CodePreviewBox>
      <Code>{children}</Code>
      {maxLineLength ? <CodeRuler $maxLineLength={maxLineLength} /> : null}
    </CodePreviewBox>
  </CodePreviewWrapper>
);

export default CodePreview;
