import { GremlinSyntaxTree, GremlintConfig, GremlinTokenType } from '../types';
import { formatMethod } from './formatMethod';
import { formatString } from './formatString';
import { formatTraversal } from './formatTraversal';
import { formatWord } from './formatWord';

export const formatSyntaxTree = (config: GremlintConfig) => (
  syntaxTree: GremlinSyntaxTree,
) => {
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
