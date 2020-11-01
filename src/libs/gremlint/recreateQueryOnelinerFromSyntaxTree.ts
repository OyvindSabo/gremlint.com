import { GremlinSyntaxTree } from './types';
import { spaces } from './utils';

const recreateQueryOnelinerFromSyntaxTree = (indentation: number = 0) => (
  syntaxTree: GremlinSyntaxTree,
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
