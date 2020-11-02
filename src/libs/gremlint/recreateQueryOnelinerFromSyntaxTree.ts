import {
  GremlinTokenType,
  UnformattedGremlinMethodSyntaxTree,
  UnformattedGremlinStringSyntaxTree,
  UnformattedGremlinTraversalSyntaxTree,
  UnformattedGremlinWordSyntaxTree,
} from './types';
import { spaces } from './utils';

type GremlinOnelinerSyntaxTree =
  | Pick<UnformattedGremlinTraversalSyntaxTree, 'type' | 'steps'>
  | Pick<UnformattedGremlinMethodSyntaxTree, 'type' | 'method' | 'arguments'>
  | Pick<UnformattedGremlinStringSyntaxTree, 'type' | 'string'>
  | Pick<UnformattedGremlinWordSyntaxTree, 'type' | 'word'>;

const recreateQueryOnelinerFromSyntaxTree = (indentation: number = 0) => (
  syntaxTree: GremlinOnelinerSyntaxTree,
): string => {
  switch (syntaxTree.type) {
    case GremlinTokenType.Traversal:
      return spaces(indentation) + syntaxTree.steps.map(recreateQueryOnelinerFromSyntaxTree()).join('.');
    case GremlinTokenType.Method:
      return (
        spaces(indentation) +
        recreateQueryOnelinerFromSyntaxTree()(syntaxTree.method) +
        '(' +
        syntaxTree.arguments.map(recreateQueryOnelinerFromSyntaxTree()).join(', ') +
        ')'
      );
    case GremlinTokenType.String:
      return spaces(indentation) + syntaxTree.string;
    case GremlinTokenType.Word:
      return spaces(indentation) + syntaxTree.word;
  }
};

export default recreateQueryOnelinerFromSyntaxTree;
