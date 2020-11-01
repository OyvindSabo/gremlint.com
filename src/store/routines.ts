import { dispatch } from '../libs/reduced-state';
import {
  SET_QUERY_INPUT,
  FORMAT_QUERY,
  SET_INDENTATION,
  SET_MAX_LINE_LENGTH,
  SET_SHOULD_PLACE_DOTS_AFTER_LINE_BREAKS,
} from './actions';

const handleSetQueryInput = () => dispatch(FORMAT_QUERY);
const handleSetIndentation = () => dispatch(FORMAT_QUERY);
const handleSetMaxLineLength = () => dispatch(FORMAT_QUERY);
const handleSetShouldPlaceDotsAfterLineBreaks = () => dispatch(FORMAT_QUERY);

const routines = {
  [SET_QUERY_INPUT]: handleSetQueryInput,
  [SET_INDENTATION]: handleSetIndentation,
  [SET_MAX_LINE_LENGTH]: handleSetMaxLineLength,
  [SET_SHOULD_PLACE_DOTS_AFTER_LINE_BREAKS]: handleSetShouldPlaceDotsAfterLineBreaks,
};

export default routines;
