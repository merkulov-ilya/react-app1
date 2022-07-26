import { useEffect, useState } from 'react';
import { store } from './index';

// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// unsubscribe();
// store.subscribe(() => console.log(store.getState()));

function BasicLegacyApp() {
  const [value, setValue] = useState(store.getState().value);

  useEffect(() => {
    // store.subscribe(() => setValue(store.getState().value));
    store.subscribe(() => {
      // console.log('call store listener');
      setValue(store.getState().value);
    });
  }, []);

  return (
    <>
      <h2>Basic Legacy App</h2>
      <button onClick={() => store.dispatch({ type: 'counter/increment', payload: 2 })}>+</button>
      <button onClick={() => store.dispatch({ type: 'counter/decrement' })}>-</button>
      {value}
    </>
  );
}

export default BasicLegacyApp;
