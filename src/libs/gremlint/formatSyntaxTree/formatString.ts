import {
  FormattedGremlinStringSyntaxTree,
  GremlintConfig,
  GremlinTokenType,
  UnformattedGremlinStringSyntaxTree,
} from '../types';

export const formatString = (config: GremlintConfig) => (
  syntaxTree: UnformattedGremlinStringSyntaxTree,
): FormattedGremlinStringSyntaxTree => {
  return {
    type: GremlinTokenType.String,
    string: syntaxTree.string,
    indentation: config.indentation,
  };
};
