import './total.css';

function round(number) {
  return Math.round(number * 100) / 100;
}

function Total(props) {

  const totalPPerson = round((props.billTotal + props.tipAmount) / props.numPeople);
  const billPPerson = round(props.billTotal / props.numPeople);
  const tipPPerson = round(props.tipAmount / props.numPeople);

  const grandTotal = round(props.billTotal + props.tipAmount);
  
  return (
    <div className='total'>

      <div className='total-top'>
        <div className='total-per-person'>
          <h3>Total Per Person</h3>
          <h1>${totalPPerson || 0}</h1>
        </div>
        <div className='total-top-right'>
          <div className='total-per-person-bill'>
            <h3>${billPPerson || 0}</h3>
            <h4>BILL</h4>
          </div>
          <div className='total-per-person-tip'>
            <h3>${tipPPerson || 0}</h3>
            <h4>TIP</h4>
          </div>
        </div>
      </div>

      <hr />
      <div className='total-bottom'>
        <div className='total-bill'>
            <h4>Grand Total</h4>
            <h2>${grandTotal}</h2>
        </div>
        <div className='total-tip'>
            <h4>Total Tip</h4>
            <h2>${props.tipAmount}</h2>
        </div>

      </div>
    </div>
  )
}

export default Total