import React from 'react';
import styled from 'styled-components';
import store from '../../store';
import QueryInput from '../../components/QueryInput';
import TextButton from '../../components/TextButton';
import CodePreview from '../../components/CodePreview';
import AdvancedOptions from './AdvancedOptions';
import { State } from '../../store/types';
import { dispatch } from '../../libs/reduced-state';
import { useReducedState } from '../../libs/reduced-state/useReducedState';
import {
  SET_QUERY_INPUT,
  TOGGLE_SHOULD_SHOW_ADVANCED_OPTIONS,
} from '../../store/actions';

const ExpandableAdvancedOptionsWrapper = styled.div<{ $isExpanded: boolean }>`
  max-height: ${({ $isExpanded }) => ($isExpanded ? '240px' : '0')};
  box-shadow: inset white 0 0 10px 0;
  overflow: hidden;
  transition: 0.5s;
`;

const QueryFormatter = () => {
  const state = useReducedState<State>(store);
  return (
    <div>
      <QueryInput
        value={state.queryInput}
        onChange={({ target }) =>
          dispatch(SET_QUERY_INPUT, (target as HTMLTextAreaElement).value)
        }
      />
      <TextButton
        label={
          state.shouldShowAdvancedOptions
            ? 'Hide advanced options'
            : 'Show advanced options'
        }
        onClick={() => dispatch(TOGGLE_SHOULD_SHOW_ADVANCED_OPTIONS)}
      />
      <ExpandableAdvancedOptionsWrapper
        $isExpanded={state.shouldShowAdvancedOptions}
      >
        <AdvancedOptions />
      </ExpandableAdvancedOptionsWrapper>
      {state.queryOutput ? (
        <CodePreview maxLineLength={state.maxLineLength}>
          {state.queryOutput}
        </CodePreview>
      ) : null}
    </div>
  );
};

export default QueryFormatter;
