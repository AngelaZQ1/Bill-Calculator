import { BillTotal, NumPeople, Tip} from '../../components';
import './calculation.css'

function Calculation(props) {

  return (
    <div className='calculation-component'>
      <div className='bill-total-container'>
        <BillTotal billTotal={props.billTotal}
                  setBillTotal = {props.setBillTotal}/>
      </div>
      <div className='tip-container'>
        <Tip billTotal={props.billTotal}
            setTipAmount={props.setTipAmount}/>
      </div>
      <div className='num-people-container'>
        <NumPeople setNumPeople={props.setNumPeople}/>
      </div>
    </div>
  )
}

export default Calculation