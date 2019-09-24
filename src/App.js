import React, { useState } from 'react';
import Counter from './components/Counter'
import Info from './components/Info'
import ContextSample from './components/ContextSample'
import CounterUseReducer from './components/CounterUseReducer'
import InfoUserReducer from './components/InfoUserReducer'
import Average from './components/Average'
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
