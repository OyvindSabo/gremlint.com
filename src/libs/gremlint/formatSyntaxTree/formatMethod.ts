import recreateQueryOnelinerFromSyntaxTree from '../recreateQueryOnelinerFromSyntaxTree';
import {
  FormattedGremlinMethodSyntaxTree,
  GremlinSyntaxTreeFormatter,
  GremlintConfig,
  GremlinTokenType,
  UnformattedGremlinMethodSyntaxTree,
} from '../types';
import { pipe } from '../utils';
import { withIncreasedIndentation, withNoEndDotInfo, withZeroDotInfo, withZeroIndentation } from './utils';

// Groups arguments into argument groups an adds an indentation property
export const formatMethod = (formatSyntaxTree: GremlinSyntaxTreeFormatter) => (config: GremlintConfig) => (
  syntaxTree: UnformattedGremlinMethodSyntaxTree,
): FormattedGremlinMethodSyntaxTree => {
  const recreatedQuery = recreateQueryOnelinerFromSyntaxTree(config.indentation)(syntaxTree);
  if (recreatedQuery.length <= config.maxLineLength) {
    return {
      type: GremlinTokenType.Method,
      method: formatSyntaxTree(withNoEndDotInfo(config))(syntaxTree.method),
      // The arguments property is here so that the resulted syntax tree can
      // still be understood by recreateQueryOnelinerFromSyntaxTree
      arguments: syntaxTree.arguments,
      argumentGroups: [syntaxTree.arguments.map(formatSyntaxTree(pipe(withZeroIndentation, withZeroDotInfo)(config)))],
      argumentsShouldStartOnNewLine: false,
      indentation: config.indentation,
      shouldStartWithDot: false,
      shouldEndWithDot: Boolean(config.shouldEndWithDot),
    };
  }
  // shouldEndWithDot has to reside on the method object, so the end dot can be
  // placed after the method parentheses. shouldStartWithDot has to be passed on
  // further down so the start dot can be placed after the indentation.
  return {
    type: GremlinTokenType.Method,
    method: formatSyntaxTree(withNoEndDotInfo(config))(syntaxTree.method),
    arguments: syntaxTree.arguments,
    argumentGroups: syntaxTree.arguments.map((step) => [
      formatSyntaxTree(pipe(withIncreasedIndentation(2), withZeroDotInfo)(config))(step),
    ]),
    argumentsShouldStartOnNewLine: true,
    shouldStartWithDot: false,
    shouldEndWithDot: Boolean(config.shouldEndWithDot),
    indentation: 0,
  };
};
