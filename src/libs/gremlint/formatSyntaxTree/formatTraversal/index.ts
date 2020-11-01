import recreateQueryOnelinerFromSyntaxTree from '../../recreateQueryOnelinerFromSyntaxTree';
import {
  GremlinSyntaxTreeFormatter,
  GremlintConfig,
  GremlinTraversalSyntaxTree,
} from '../../types';
import { withZeroIndentation } from '../utils';
import { getStepGroups } from './getStepGroups';

// Groups steps into step groups and adds an indentation property
export const formatTraversal = (
  formatSyntaxTree: GremlinSyntaxTreeFormatter,
) => (config: GremlintConfig) => (syntaxTree: GremlinTraversalSyntaxTree) => {
  const recreatedQuery = recreateQueryOnelinerFromSyntaxTree(
    config.indentation,
  )(syntaxTree);
  if (recreatedQuery.length <= config.maxLineLength) {
    return {
      type: 'traversal',
      stepGroups: [
        {
          steps: syntaxTree.steps.map((step, stepIndex) =>
            formatSyntaxTree(
              stepIndex === 0 ? config : withZeroIndentation(config),
            )(step),
          ),
        },
      ],
    };
  }
  return {
    type: 'traversal',
    stepGroups: getStepGroups(formatSyntaxTree, syntaxTree.steps, config),
  };
};
