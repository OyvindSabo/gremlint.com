import { GremlinSyntaxTree } from './types';
import { spaces } from './utils';

export const recreateQueryStringFromFormattedSyntaxTree = (
  syntaxTree: GremlinSyntaxTree,
) => {
  if (syntaxTree.type === 'traversal') {
    return syntaxTree.stepGroups
      .map((stepGroup) =>
        stepGroup.steps
          .map(recreateQueryStringFromFormattedSyntaxTree)
          .join('.'),
      )
      .join('\n');
  }
  if (syntaxTree.type === 'method') {
    return (
      (syntaxTree.shouldStartWithDot ? '.' : '') +
      [
        recreateQueryStringFromFormattedSyntaxTree(syntaxTree.method) + '(',
        syntaxTree.argumentGroups
          .map((args) =>
            args.map(recreateQueryStringFromFormattedSyntaxTree).join(', '),
          )
          .join(',\n') +
          ')' +
          (syntaxTree.shouldEndWithDot ? '.' : ''),
      ].join(syntaxTree.argumentsShouldStartOnNewLine ? '\n' : '')
    );
  }
  if (syntaxTree.type === 'string') {
    return spaces(syntaxTree.indentation) + syntaxTree.string;
  }
  if (syntaxTree.type === 'word') {
    return (
      spaces(syntaxTree.indentation) +
      (syntaxTree.shouldStartWithDot ? '.' : '') +
      syntaxTree.word +
      (syntaxTree.shouldEndWithDot ? '.' : '')
    );
  }
};
