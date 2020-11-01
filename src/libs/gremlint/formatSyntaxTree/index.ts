import { GremlinSyntaxTree, GremlintConfig } from '../types';
import { formatMethod } from './formatMethod';
import { formatString } from './formatString';
import { formatTraversal } from './formatTraversal';
import { formatWord } from './formatWord';

export const formatSyntaxTree = (config: GremlintConfig) => (
  syntaxTree: GremlinSyntaxTree,
) => {
  switch (syntaxTree.type) {
    case 'traversal':
      return formatTraversal(formatSyntaxTree)(config)(syntaxTree);
    case 'method':
      return formatMethod(formatSyntaxTree)(config)(syntaxTree);
    case 'string':
      return formatString(config)(syntaxTree);
    case 'word':
      return formatWord(config)(syntaxTree);
  }
};
