import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redusers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from "./localStorage"

const persistedState = loadState();
const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;