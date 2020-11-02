import {
  FormattedGremlinWordSyntaxTree,
  GremlintConfig,
  GremlinTokenType,
  UnformattedGremlinWordSyntaxTree,
} from '../types';

export const formatWord = (config: GremlintConfig) => (
  syntaxTree: UnformattedGremlinWordSyntaxTree,
): FormattedGremlinWordSyntaxTree => {
  return {
    type: GremlinTokenType.Word,
    word: syntaxTree.word,
    indentation: config.indentation,
    shouldStartWithDot: Boolean(config.shouldStartWithDot),
    shouldEndWithDot: Boolean(config.shouldEndWithDot),
  };
};
