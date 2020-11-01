import { GremlinSyntaxTree } from '../../../types';

export const isTraversalSource = (step: GremlinSyntaxTree) =>
  step.type === 'word' && step.word === 'g';

export const isModulator = (step: GremlinSyntaxTree) =>
  step.type === 'method' &&
  step.method.type === 'word' &&
  [
    'as',
    'as_',
    'by',
    'emit',
    'option',
    'from',
    'from_',
    'to',
    'read',
    'times',
    'until',
    'with',
    'with_',
    'write',
  ].includes(step.method.word);
