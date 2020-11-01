import { formatSyntaxTree } from './formatSyntaxTree';
import { parseToSyntaxTree } from './parseToSyntaxTree';
import { recreateQueryStringFromFormattedSyntaxTree } from './recreateQueryStringFromFormattedSyntaxTree';
import { GremlintConfig } from './types';
import { pipe } from './utils';

export const formatQuery = (
  query: string,
  config: GremlintConfig = {
    indentation: 0,
    maxLineLength: 80,
    shouldPlaceDotsAfterLineBreaks: false,
  },
) => {
  return pipe(
    parseToSyntaxTree,
    formatSyntaxTree(config),
    recreateQueryStringFromFormattedSyntaxTree,
  )(query);
};
