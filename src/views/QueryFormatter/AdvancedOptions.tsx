import styled from 'styled-components';
import { dispatch } from '../../libs/reduced-state';
import { useReducedState } from '../../libs/reduced-state/useReducedState';
import store from '../../store';
import {
  SET_INDENTATION,
  SET_MAX_LINE_LENGTH,
  SET_SHOULD_PLACE_DOTS_AFTER_LINE_BREAKS,
} from '../../store/actions';
import { inputTextColor, textColor } from '../../styleVariables';
import Toggle from '../../components/Toggle';

const AdvancedOptionRowWrapper = styled.div`
  padding: 10px;
`;

const AdvancedOptionLabel = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  color: ${textColor};
`;

const AdvancedOptionInput = styled.input`
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  outline: none;
  font-size: 16px;
  padding: 10px;
  border: none;
  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;
  color: ${inputTextColor};
  display: inline-block;
  vertical-align: bottom;
  box-sizing: border-box;
  height: 40px;
  width: 320px;
`;

const AdvancedOptions = () => {
  const state = useReducedState(store);
  return (
    <div>
      <AdvancedOptionRowWrapper>
        <AdvancedOptionLabel>Indentation</AdvancedOptionLabel>
        <AdvancedOptionInput
          type="number"
          min={0}
          max={state.maxLineLength}
          value={state.indentation}
          onChange={({ target }) => {
            dispatch(SET_INDENTATION, target.value);
          }}
        />
      </AdvancedOptionRowWrapper>
      <AdvancedOptionRowWrapper>
        <AdvancedOptionLabel>Max line length</AdvancedOptionLabel>
        <AdvancedOptionInput
          type="number"
          min={state.indentation}
          value={state.maxLineLength}
          onChange={({ target }) => {
            dispatch(SET_MAX_LINE_LENGTH, target.value);
          }}
        />
      </AdvancedOptionRowWrapper>
      <AdvancedOptionRowWrapper>
        <AdvancedOptionLabel>Dot placement</AdvancedOptionLabel>
        <Toggle
          height="40px"
          width="320px"
          checked={state.shouldPlaceDotsAfterLineBreaks}
          labels={{
            checked: 'After line break',
            unchecked: 'Before line break',
          }}
          onChange={(shouldPlaceDotsAfterLineBreaks) => {
            dispatch(
              SET_SHOULD_PLACE_DOTS_AFTER_LINE_BREAKS,
              shouldPlaceDotsAfterLineBreaks,
            );
          }}
        />
      </AdvancedOptionRowWrapper>
    </div>
  );
};

export default AdvancedOptions;
