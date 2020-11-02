import { useEffect, useState } from 'react';
import { ReducedState } from './types';

export const useReducedState = <T>(reducedState: ReducedState<T>) => {
  const [state, setState] = useState<T>(reducedState.state);

  useEffect(() => {
    const changeListener = (state: T) => {
      setState(state);
    };
    reducedState.addChangeListener(changeListener);
    return () => reducedState.removeChangeListener(changeListener);
  }, [reducedState]);

  return state;
};
