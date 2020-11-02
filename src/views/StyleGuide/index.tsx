import React from 'react';
import StyleGuideRule from '../../components/StyleGuideRule';
import { rules } from './rules';

const StyleGuide = () => (
  <div>
    {rules.map(({ title, explanation, example }) => (
      <StyleGuideRule
        key={title}
        title={title}
        explanation={explanation}
        example={example}
      />
    ))}
  </div>
);

export default StyleGuide;
