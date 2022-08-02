import React, { useState } from 'react';
import './numPeople.css'

function NumPeople(props) {
  const [numPeople, setNumPeople] = useState(1);

  let handleIncrementPeople = () => {
    setNumPeople(numPeople + 1);
    props.setNumPeople(numPeople + 1);
  }

  let handleDecrementPeople = () => {
    if (numPeople <= 1) {
      return;
    }
    setNumPeople(numPeople - 1);
    props.setNumPeople(numPeople - 1);
  }

  let handlePeopleChange = (event) => {
    setNumPeople(event.target.value);
    props.setNumPeople(event.target.value);
  }

  return (
    <div>
      <h3 className='section-title'>Number of People</h3>
      <div className='people-counter'>
        <button className='decrement-num-people' onClick={handleDecrementPeople}>–</button>
        <input className='num-people-input' type='number' value={numPeople} onChange={handlePeopleChange}></input>
        <button className='increment-num-people' onClick={handleIncrementPeople}>+</button>
      </div>
    </div>
  )
}

export default NumPeople