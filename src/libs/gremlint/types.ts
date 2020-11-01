export type GremlintConfig = {
  indentation: number;
  shouldEndWithDot: boolean;
  shouldStartWithDot: boolean;
}

export type GremlinBaseSyntaxTree = {
  shouldEndWithDot: boolean;
  shouldStartWithDot: boolean;
  indentation: number;
}

export type GremlinTraversalSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'traversal';
  steps: GremlinSyntaxTree[];
  stepGroups: ({ steps: GremlinSyntaxTree[] })[];
}

export type GremlinMethodSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'method';
  method: GremlinSyntaxTree;
  arguments: GremlinSyntaxTree[];
  argumentGroups: GremlinSyntaxTree[][];
  argumentsShouldStartOnNewLine: boolean;
}

export type GremlinStringSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'string';
  string: string;
}

export type GremlinWordSyntaxTree = GremlinBaseSyntaxTree & {
  type: 'word';
  word: string;
}

export type GremlinSyntaxTree = GremlinTraversalSyntaxTree | GremlinMethodSyntaxTree | GremlinStringSyntaxTree | GremlinWordSyntaxTree;