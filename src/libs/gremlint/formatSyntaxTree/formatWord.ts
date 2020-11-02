import {
  ExtendedGremlintConfig,
  FormattedGremlinWordSyntaxTree,
  GremlinTokenType,
  UnformattedGremlinWordSyntaxTree,
} from '../types';

export const formatWord = (config: ExtendedGremlintConfig) => (
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
