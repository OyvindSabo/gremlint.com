import { ChangeListener, CreateReducedStateProps } from './types';

const createReducedState = <T>({
  initialState,
  reducers,
  routines,
}: CreateReducedStateProps<T>) => {
  let state = initialState;
  let subscribedElements = [];
  let changeListeners = [];

  Object.entries(reducers).forEach(([action, reducer]) => {
    window.addEventListener(action, (event: CustomEvent) => {
      const nextState = reducer(state, event.detail);
      state = nextState;
      subscribedElements.forEach((subscriber) => subscriber.update());
      changeListeners.forEach((changeListener) => changeListener(state));
    });
  });

  Object.entries(routines).forEach(([action, routine]) => {
    window.addEventListener(action, (event: CustomEvent) => {
      routine(state, event.detail);
    });
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
