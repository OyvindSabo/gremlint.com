import React from 'react';
import styled from 'styled-components';
import { highlightedTextColor, textColor } from '../styleVariables';

const TextButtonWrapper = styled.span`
  display: inline-block;
  padding: 10px;
  box-sizing: border-box;
`;

const TextButtonButton = styled.button`
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  color: ${textColor};
  &: {
    color: ${highlightedTextColor};
  }
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
`;

type TextButtonProps = {
  label: string;
  onClick: VoidFunction;
};

const TextButton = ({ label, onClick }: TextButtonProps) => (
  <TextButtonWrapper>
    <TextButtonButton onClick={onClick}>{label}</TextButtonButton>
  </TextButtonWrapper>
);

export default TextButton;
