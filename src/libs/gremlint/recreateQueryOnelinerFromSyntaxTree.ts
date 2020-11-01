import {
  GremlinMethodSyntaxTree,
  GremlinStringSyntaxTree,
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
) => {
  switch (syntaxTree.type) {
    case 'traversal':
      return (
        spaces(indentation) +
        syntaxTree.steps.map(recreateQueryOnelinerFromSyntaxTree()).join('.')
      );
    case 'method':
      return (
        spaces(indentation) +
        recreateQueryOnelinerFromSyntaxTree()(syntaxTree.method) +
        '(' +
        syntaxTree.arguments
          .map(recreateQueryOnelinerFromSyntaxTree())
          .join(', ') +
        ')'
      );
    case 'string':
      return spaces(indentation) + syntaxTree.string;
    case 'word':
      return spaces(indentation) + syntaxTree.word;
  }
};

export default recreateQueryOnelinerFromSyntaxTree;
