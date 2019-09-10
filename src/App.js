import React, { useState } from 'react';
import Counter from './Counter'
import Info from './Info'
import ContextSample from './ContextSample'
import CounterUseReducer from './CounterUseReducer'
import InfoUserReducer from './InfoUserReducer'
import Average from './Average'
import './App.css';

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Counter />
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
      <ContextSample />
      <CounterUseReducer />
      <InfoUserReducer />
      <Average />
    </>
  );
}

export default App;
