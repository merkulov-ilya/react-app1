import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './index';

function BasicLegacyApp() {
  const dispatch = useDispatch();
  const value = useSelector<{ value: 0 }>((state) => state.value);

  return (
    <>
      <h2>Basic Legacy React App</h2>
      <button onClick={() => dispatch({ type: 'counter/increment', payload: 2 })}>+</button>
      <button onClick={() => dispatch({ type: 'counter/decrement' })}>-</button>
      {value}
    </>
  );
}

function BasicLegacyReactApp() {
  return (
    <Provider store={store}>
      <BasicLegacyApp />
    </Provider>
  );
}

export default BasicLegacyReactApp;
