import { GremlinSyntaxTree, GremlintConfig } from "../types";

export const formatWord = (config: GremlintConfig) => (syntaxTree: GremlinSyntaxTree) => {
  return {
    type: 'word',
    word: syntaxTree.word,
    indentation: config.indentation,
    shouldStartWithDot: config.shouldStartWithDot,
    shouldEndWithDot: config.shouldEndWithDot,
  };
};