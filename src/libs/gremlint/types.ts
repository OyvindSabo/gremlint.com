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

export enum GremlinTokenType {
  Method = 'METHOD',
  String = 'STRING',
  Word = 'WORD',
  Traversal = 'TRAVERSAL',
}

export type UnformattedGremlinMethodSyntaxTree = {
  type: GremlinTokenType.Method;
  method: UnformattedGremlinSyntaxTree;
  arguments: UnformattedGremlinSyntaxTree[];
};

export type UnformattedGremlinStringSyntaxTree = {
  type: GremlinTokenType.String;
  string: string;
};

export type UnformattedGremlinWordSyntaxTree = {
  type: GremlinTokenType.Word;
  word: string;
};

export type UnformattedGremlinTraversalSyntaxTree = {
  type: GremlinTokenType.Traversal;
  steps: UnformattedGremlinSyntaxTree[];
};

export type UnformattedGremlinSyntaxTree =
  | UnformattedGremlinMethodSyntaxTree
  | UnformattedGremlinStringSyntaxTree
  | UnformattedGremlinWordSyntaxTree
  | UnformattedGremlinTraversalSyntaxTree;

export type GremlinStepGroup = { steps: GremlinSyntaxTree[] };

export type GremlinTraversalSyntaxTree = GremlinBaseSyntaxTree & {
  type: GremlinTokenType.Traversal;
  steps: GremlinSyntaxTree[];
  stepGroups: GremlinStepGroup[];
};

export type GremlinMethodSyntaxTree = GremlinBaseSyntaxTree & {
  type: GremlinTokenType.Method;
  method: GremlinSyntaxTree;
  arguments: GremlinSyntaxTree[];
  argumentGroups: GremlinSyntaxTree[][];
  argumentsShouldStartOnNewLine: boolean;
};

export type GremlinStringSyntaxTree = GremlinBaseSyntaxTree & {
  type: GremlinTokenType.String;
  string: string;
};

export type GremlinWordSyntaxTree = GremlinBaseSyntaxTree & {
  type: GremlinTokenType.Word;
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
