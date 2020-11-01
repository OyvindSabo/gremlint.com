import React from 'react';
import StyleGuideRule from '../../components/StyleGuideRule';
import { rules } from './rules';

const StyleGuide = () => (
  <div>
    {rules.map(({ title, explanation, example }) => (
      <StyleGuideRule
        title={title}
        explanation={explanation}
        example={example}
      />
    ))}
  </div>
);

export default StyleGuide;
