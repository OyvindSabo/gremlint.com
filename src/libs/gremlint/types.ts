export type GremlintConfig = {
  indentation: number;
  // TODO: Finf out if the two properties below are needed here
  maxLineLength: number;
  shouldPlaceDotsAfterLineBreaks: boolean;
  shouldEndWithDot?: boolean;
  shouldStartWithDot?: boolean;
};

export type GremlinBaseSyntaxTree = {
  //shouldEndWithDot: boolean;
  //shouldStartWithDot: boolean;
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

export type GremlinStepGroup = { steps: FormattedGremlinSyntaxTree[] };

export type FormattedGremlinTraversalSyntaxTree = {
  type: GremlinTokenType.Traversal;
  steps: UnformattedGremlinSyntaxTree[];
  stepGroups: GremlinStepGroup[];
  indentation: number;
};

export type FormattedGremlinMethodSyntaxTree = {
  type: GremlinTokenType.Method;
  method: FormattedGremlinSyntaxTree;
  arguments: UnformattedGremlinSyntaxTree[];
  argumentGroups: FormattedGremlinSyntaxTree[][];
  argumentsShouldStartOnNewLine: boolean;
  indentation: number;
  shouldStartWithDot: boolean;
  shouldEndWithDot: boolean;
};

export type FormattedGremlinStringSyntaxTree = {
  type: GremlinTokenType.String;
  string: string;
  indentation: number;
};

export type FormattedGremlinWordSyntaxTree = {
  type: GremlinTokenType.Word;
  word: string;
  indentation: number;
  shouldStartWithDot: boolean;
  shouldEndWithDot: boolean;
};

export type FormattedGremlinSyntaxTree =
  | FormattedGremlinTraversalSyntaxTree
  | FormattedGremlinMethodSyntaxTree
  | FormattedGremlinStringSyntaxTree
  | FormattedGremlinWordSyntaxTree;

export type GremlinSyntaxTreeFormatter = (
  config: GremlintConfig,
) => (syntaxTree: UnformattedGremlinSyntaxTree) => FormattedGremlinSyntaxTree;
