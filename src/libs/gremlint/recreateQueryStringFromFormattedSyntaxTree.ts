import { GremlinSyntaxTree, GremlinTokenType } from './types';
import { spaces } from './utils';

export const recreateQueryStringFromFormattedSyntaxTree = (
  syntaxTree: GremlinSyntaxTree,
): string => {
  if (syntaxTree.type === GremlinTokenType.Traversal) {
    return syntaxTree.stepGroups
      .map((stepGroup) =>
        stepGroup.steps
          .map(recreateQueryStringFromFormattedSyntaxTree)
          .join('.'),
      )
      .join('\n');
  }
  if (syntaxTree.type === GremlinTokenType.Method) {
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
  if (syntaxTree.type === GremlinTokenType.String) {
    return spaces(syntaxTree.indentation) + syntaxTree.string;
  }
  if (syntaxTree.type === GremlinTokenType.Word) {
    return (
      spaces(syntaxTree.indentation) +
      (syntaxTree.shouldStartWithDot ? '.' : '') +
      syntaxTree.word +
      (syntaxTree.shouldEndWithDot ? '.' : '')
    );
  }
  // The following line is just here to convince TypeScript that the return type
  // is string and not string | undefined.
  return '';
};
