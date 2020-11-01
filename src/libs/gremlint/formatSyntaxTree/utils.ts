import { GremlintConfig } from '../types';

export const withIndentation = (indentation: number) => (
  config: GremlintConfig,
) => ({
  ...config,
  indentation,
});

export const withZeroIndentation = (config: GremlintConfig) =>
  withIndentation(0)(config);

export const withIncreasedIndentation = (indentationIncrease: number) => (
  config: GremlintConfig,
) => ({
  ...config,
  indentation: config.indentation + indentationIncrease,
});

export const withDotInfo = ({
  shouldStartWithDot,
  shouldEndWithDot,
}: {
  // TODO: Find out if this could be GremlintConfig or GremlinSyntaxTree
  shouldStartWithDot: boolean;
  shouldEndWithDot: boolean;
}) => (config: GremlintConfig) => ({
  ...config,
  shouldStartWithDot,
  shouldEndWithDot,
});

export const withZeroDotInfo = (config: GremlintConfig) => ({
  ...config,
  shouldStartWithDot: false,
  shouldEndWithDot: false,
});

export const withNoEndDotInfo = (config: GremlintConfig) => ({
  ...config,
  shouldEndWithDot: false,
});
