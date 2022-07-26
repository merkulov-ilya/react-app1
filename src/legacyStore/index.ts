import { createStore } from 'redux';

// function counterReducer(state = { value: 0 }, action: Action<string> & { payload: number }) {
function counterReducer(state = { value: 0 }, action: { type: string; payload?: number }) {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, value: state.value + (action.payload ?? 0) };
    case 'counter/decrement':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

// export const store = createStore((s) => s);
export const store = createStore(counterReducer);
