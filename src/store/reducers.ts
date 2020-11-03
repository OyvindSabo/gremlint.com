import { formatQuery } from 'gremlint';
import {
  FORMAT_QUERY,
  SET_INDENTATION,
  SET_MAX_LINE_LENGTH,
  SET_QUERY_INPUT,
  SET_SHOULD_PLACE_DOTS_AFTER_LINE_BREAKS,
  TOGGLE_SHOULD_SHOW_ADVANCED_OPTIONS,
} from './actions';
import { State } from './types';

const handleSetQueryInput = (state: State, queryInput: string) => ({
  ...state,
  queryInput,
});

const handleFormatQuery = (state: State) => ({
  ...state,
  queryOutput: formatQuery(state.queryInput, {
    indentation: state.indentation,
    maxLineLength: state.maxLineLength,
    shouldPlaceDotsAfterLineBreaks: state.shouldPlaceDotsAfterLineBreaks,
  }),
});

const handleToggleShouldShowAdvancedOptions = (state: State) => ({
  ...state,
  shouldShowAdvancedOptions: !state.shouldShowAdvancedOptions,
});

const handleSetIndentation = (state: State, unparsedIndentation: string) => {
  const indentation = parseInt(unparsedIndentation);
  if (isNaN(indentation)) return { ...state };
  if (indentation < 0) return { ...state, indentation: 0 };
  const { maxLineLength } = state;
  if (indentation > maxLineLength) {
    return { ...state, indentation: maxLineLength };
  }
  return { ...state, indentation };
};

const handleSetMaxLineLength = (state: State, unparsedMaxLineLength: string) => {
  const maxLineLength = parseInt(unparsedMaxLineLength);
  if (isNaN(maxLineLength)) return { ...state };
  const { indentation } = state;
  if (maxLineLength < indentation) {
    return { ...state, maxLineLength: indentation };
  }
  return { ...state, maxLineLength };
};

const handleSetShouldPlaceDotsAfterLineBreaks = (state: State, shouldPlaceDotsAfterLineBreaks: boolean) => ({
  ...state,
  shouldPlaceDotsAfterLineBreaks,
});

const reducers = {
  [SET_QUERY_INPUT]: handleSetQueryInput,
  [FORMAT_QUERY]: handleFormatQuery,
  [TOGGLE_SHOULD_SHOW_ADVANCED_OPTIONS]: handleToggleShouldShowAdvancedOptions,
  [SET_INDENTATION]: handleSetIndentation,
  [SET_MAX_LINE_LENGTH]: handleSetMaxLineLength,
  [SET_SHOULD_PLACE_DOTS_AFTER_LINE_BREAKS]: handleSetShouldPlaceDotsAfterLineBreaks,
};

export default reducers;
