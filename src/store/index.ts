import createReducedState from '../libs/reduced-state';
import initialState from './initialState';
import reducers from './reducers';
import routines from './routines';

const store = createReducedState({ initialState, reducers, routines });

export default store;
