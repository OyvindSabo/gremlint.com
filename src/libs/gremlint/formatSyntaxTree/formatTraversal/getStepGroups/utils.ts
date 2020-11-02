import { GremlinSyntaxTree, GremlinTokenType } from '../../../types';

export const isTraversalSource = (step: GremlinSyntaxTree): boolean =>
  step.type === GremlinTokenType.Word && step.word === 'g';

export const isModulator = (step: GremlinSyntaxTree): boolean =>
  step.type === GremlinTokenType.Method &&
  step.method.type === GremlinTokenType.Word &&
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
