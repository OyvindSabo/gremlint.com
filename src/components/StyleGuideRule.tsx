import React from 'react';
import Paragraph from './Paragraph';
import Title from './Title';
import CodePreview from './CodePreview';
import Spacer from './Spacer';

type StyleGuideRuleProps = {
  title: string;
  explanation: string;
  example: string;
};

const StyleGuideRule = ({
  title,
  explanation,
  example,
}: StyleGuideRuleProps) => (
  <div>
    <Title>{title}</Title>
    <Paragraph>{explanation}</Paragraph>
    <CodePreview>{example}</CodePreview>
    <Spacer />
  </div>
);

export default StyleGuideRule;
