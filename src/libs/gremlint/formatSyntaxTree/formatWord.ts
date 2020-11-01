import { GremlintConfig, GremlinWordSyntaxTree } from "../types";

export const formatWord = (config: GremlintConfig) => (syntaxTree: GremlinWordSyntaxTree) => {
  return {
    type: 'word',
    word: syntaxTree.word,
    indentation: config.indentation,
    shouldStartWithDot: config.shouldStartWithDot,
    shouldEndWithDot: config.shouldEndWithDot,
  };
};