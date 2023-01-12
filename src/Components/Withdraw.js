import React from 'react'
import './Withdraw.css';
import { useState } from 'react';

const Withdraw = () => {

    const [amount, setAmount] = useState(100); 
    
    const changeHandler = (e) =>{
      e.preventDefault();
        setAmount(amount-10);
    }

  return (
    <div className='withdraw__container'>
    <h1> Original Amount $ {amount}</h1>

    <div className='withdraw__content'>

    <h3>Amount to be Withdrawn :  {10} 
    </h3>

    <h2>Amount left after deduction : ${amount}</h2>

    <button onClick = {changeHandler}> Withdraw </button>
    
    
    </div>
    </div>
  )
}

export default Withdraw