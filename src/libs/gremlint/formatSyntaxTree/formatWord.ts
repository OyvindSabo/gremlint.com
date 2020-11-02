import {
  GremlintConfig,
  GremlinTokenType,
  GremlinWordSyntaxTree,
} from '../types';

export const formatWord = (config: GremlintConfig) => (
  syntaxTree: GremlinWordSyntaxTree,
) => {
  return {
    type: GremlinTokenType.Word,
    word: syntaxTree.word,
    indentation: config.indentation,
    shouldStartWithDot: config.shouldStartWithDot,
    shouldEndWithDot: config.shouldEndWithDot,
  };
};
