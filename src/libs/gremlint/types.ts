export type GremlintConfig = {
  indentation: number;
  // TODO: Finf out if the two properties below are needed here
  maxLineLength: number;
  shouldPlaceDotsAfterLineBreaks: boolean;
  shouldEndWithDot?: boolean;
  shouldStartWithDot?: boolean;
};

export type GremlinBaseSyntaxTree = {
  shouldEndWithDot: boolean;
  shouldStartWithDot: boolean;
  indentation: number;
};

export type GremlinStepGroup = { steps: GremlinSyntaxTree[] };

export type GremlinTraversalSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'traversal';
  steps: GremlinSyntaxTree[];
  stepGroups: GremlinStepGroup[];
};

export type GremlinMethodSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'method';
  method: GremlinSyntaxTree;
  arguments: GremlinSyntaxTree[];
  argumentGroups: GremlinSyntaxTree[][];
  argumentsShouldStartOnNewLine: boolean;
};

export type GremlinStringSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'string';
  string: string;
};

export type GremlinWordSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'word';
  word: string;
};

export type GremlinSyntaxTree =
  | GremlinTraversalSyntaxTree
  | GremlinMethodSyntaxTree
  | GremlinStringSyntaxTree
  | GremlinWordSyntaxTree;

export type GremlinSyntaxTreeFormatter = (
  config: GremlintConfig,
) => (syntaxTree: GremlinSyntaxTree) => GremlinSyntaxTree;
