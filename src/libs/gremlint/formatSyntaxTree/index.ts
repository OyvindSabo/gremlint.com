import { FormattedGremlinSyntaxTree, GremlintConfig, GremlinTokenType, UnformattedGremlinSyntaxTree } from '../types';
import { formatMethod } from './formatMethod';
import { formatString } from './formatString';
import { formatTraversal } from './formatTraversal';
import { formatWord } from './formatWord';

export const formatSyntaxTree = (config: GremlintConfig) => (
  syntaxTree: UnformattedGremlinSyntaxTree,
): FormattedGremlinSyntaxTree => {
  switch (syntaxTree.type) {
    case GremlinTokenType.Traversal:
      return formatTraversal(formatSyntaxTree)(config)(syntaxTree);
    case GremlinTokenType.Method:
      return formatMethod(formatSyntaxTree)(config)(syntaxTree);
    case GremlinTokenType.String:
      return formatString(config)(syntaxTree);
    case GremlinTokenType.Word:
      return formatWord(config)(syntaxTree);
  }
};
