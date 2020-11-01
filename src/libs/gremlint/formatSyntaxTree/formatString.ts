import { GremlintConfig, GremlinStringSyntaxTree } from '../types';

export const formatString = (config: GremlintConfig) => (
  syntaxTree: GremlinStringSyntaxTree,
) => {
  return {
    type: 'string',
    string: syntaxTree.string,
    indentation: config.indentation,
  };
};
