import { ChangeListener, CreateReducedStateProps } from './types';

const createReducedState = <T>({
  initialState,
  reducers,
  routines,
}: CreateReducedStateProps<T>) => {
  let state = initialState;
  let changeListeners: ChangeListener<T>[] = [];

  Object.entries(reducers).forEach(([action, reducer]) => {
    window.addEventListener(action, ((event: CustomEvent) => {
      const nextState = reducer(state, event.detail);
      state = nextState;
      changeListeners.forEach((changeListener) => changeListener(state));
    }) as EventListener);
  });

  Object.entries(routines).forEach(([action, routine]) => {
    window.addEventListener(action, ((event: CustomEvent) => {
      routine(state, event.detail);
    }) as EventListener);
  });

  const addChangeListener = (changeListenerToBeAdded: ChangeListener<T>) => {
    changeListeners = [...changeListeners, changeListenerToBeAdded];
  };

  const removeChangeListener = (
    changeListenerToBeRemoved: ChangeListener<T>,
  ) => {
    changeListeners = changeListeners.filter(
      (changeListener) => changeListener !== changeListenerToBeRemoved,
    );
  };

  return { state, addChangeListener, removeChangeListener };
};

export default createReducedState;
