import './billTotal.css';

function BillTotal(props) {

  const handleChange = (event) => {
    let billTotal = parseFloat(event.target.value)

    props.setBillTotal(billTotal);
  }

  return (
    <div className='bill-total'>
      <h3 className='section-title'>Bill Total</h3>
      <input className='big-input'
            type='number'
            step='0.1'
            value={props.billTotal}
            onChange={handleChange}></input>
    </div>
  )
}

export default BillTotal