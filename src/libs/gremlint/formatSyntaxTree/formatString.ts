import { GremlintConfig, GremlinSyntaxTree } from "../types";

export const formatString = (config: GremlintConfig) => (syntaxTree: GremlinSyntaxTree) => {
  return {
    type: 'string',
    string: syntaxTree.string,
    indentation: config.indentation,
  };
};