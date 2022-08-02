import React, { useState } from 'react';
import { Calculation, Total } from './containers';
import './App.css';

function App() {
  const [billTotal, setBillTotal] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [numPeople, setNumPeople] = useState(1);

  return (
    <div className='app-container'>
      <div className='calculation-container'>
        <Calculation billTotal={billTotal}
                    setTipAmount={setTipAmount}
                    setBillTotal={setBillTotal}
                    setNumPeople={setNumPeople}/>
      </div>
      <div className='total-container'>
        <Total billTotal={billTotal}
              tipAmount={tipAmount}
              numPeople={numPeople}
              />
      </div>
    </div>
  )
}

export default App