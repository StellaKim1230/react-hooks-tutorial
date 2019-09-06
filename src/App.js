import React, { useState } from 'react';
import Counter from './Counter'
import Info from './Info'
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
    </>
  );
}

export default App;
