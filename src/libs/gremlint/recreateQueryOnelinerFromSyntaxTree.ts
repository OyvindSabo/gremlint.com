import {
  GremlinMethodSyntaxTree,
  GremlinStringSyntaxTree,
  GremlinTokenType,
  GremlinTraversalSyntaxTree,
  GremlinWordSyntaxTree,
} from './types';
import { spaces } from './utils';

type GremlinOnelinerSyntaxTree =
  | Pick<GremlinTraversalSyntaxTree, 'type' | 'steps'>
  | Pick<GremlinMethodSyntaxTree, 'type' | 'method' | 'arguments'>
  | Pick<GremlinStringSyntaxTree, 'type' | 'string'>
  | Pick<GremlinWordSyntaxTree, 'type' | 'word'>;

const recreateQueryOnelinerFromSyntaxTree = (indentation: number = 0) => (
  syntaxTree: GremlinOnelinerSyntaxTree,
): string => {
  switch (syntaxTree.type) {
    case GremlinTokenType.Traversal:
      return (
        spaces(indentation) +
        syntaxTree.steps.map(recreateQueryOnelinerFromSyntaxTree()).join('.')
      );
    case GremlinTokenType.Method:
      return (
        spaces(indentation) +
        recreateQueryOnelinerFromSyntaxTree()(syntaxTree.method) +
        '(' +
        syntaxTree.arguments
          .map(recreateQueryOnelinerFromSyntaxTree())
          .join(', ') +
        ')'
      );
    case GremlinTokenType.String:
      return spaces(indentation) + syntaxTree.string;
    case GremlinTokenType.Word:
      return spaces(indentation) + syntaxTree.word;
  }
};

export default recreateQueryOnelinerFromSyntaxTree;
