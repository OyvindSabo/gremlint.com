import {
  GremlintConfig,
  GremlinStringSyntaxTree,
  GremlinTokenType,
} from '../types';

export const formatString = (config: GremlintConfig) => (
  syntaxTree: GremlinStringSyntaxTree,
) => {
  return {
    type: GremlinTokenType.String,
    string: syntaxTree.string,
    indentation: config.indentation,
  };
};
