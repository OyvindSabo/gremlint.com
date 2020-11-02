import { FormattedSyntaxTree, TokenType, UnformattedSyntaxTree } from '../../../types';

export const isTraversalSource = (step: FormattedSyntaxTree): boolean =>
  step.type === TokenType.Word && step.word === 'g';

export const isModulator = (step: UnformattedSyntaxTree | FormattedSyntaxTree): boolean =>
  step.type === TokenType.Method &&
  step.method.type === TokenType.Word &&
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
