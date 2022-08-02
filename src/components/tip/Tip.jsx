import React, { useState } from 'react';
import './tip.css';

function Tip(props) {
  const [tipDollarAmount, setTipDollarAmount] = useState(0); // is this needed

  const handleChangeTipDollarAmount = (event) => {
    let dollarAmount = event.target.value;
    setTipDollarAmount(dollarAmount);
    props.setTipAmount(dollarAmount);

    setCustomTipPct(Math.round(dollarAmount / props.billTotal * 100));
  }

  function handleClickTipPct(pct) {
    const newTipDollarAmount = Math.round(props.billTotal * pct * 100) / 100;
    setTipDollarAmount(newTipDollarAmount);
    props.setTipAmount(newTipDollarAmount);

    setCustomTipPct(Math.round(newTipDollarAmount / props.billTotal * 100));
  }

  const [customTipPct, setCustomTipPct] = useState(0.0);

  const handleChangeCustomTipPct = (event) => {
    setCustomTipPct(event.target.value);

    let tipDollarAmount = props.billTotal * (event.target.value / 100);
    setTipDollarAmount(tipDollarAmount); 
  }
  
  return (
    <div className='tip-section'>
      <span className='tip-wrapper'>
        <h3 className='section-title'>Tip</h3>
        <div className='tip-selection'>
          <button onClick={ () => handleClickTipPct(.1) }>10%</button>
          <button onClick={ () => handleClickTipPct(.15) }>15%</button>
          <button onClick={ () => handleClickTipPct(.18) }>18%</button>
          <button onClick={ () => handleClickTipPct(.2) }>20%</button> 
          <input className='tip-percentage-input'
                  placeholder='Custom %'
                  value={customTipPct}
                  onChange={handleChangeCustomTipPct}></input>
        </div>
        <input className='tip-dollar-amt big-input'
                type='number'
                step='0.1'
                value={tipDollarAmount}
                onChange={handleChangeTipDollarAmount}></input>
      </span>
    </div>
  )
}

export default Tip