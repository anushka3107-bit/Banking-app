import React, { useState } from 'react'
import './Balance.css';

const Balance = () => {

  const withdrawn = 10;
  const[amount,setAmount] = useState(100);


  const changeHandler = (e) =>{
    e.preventDefault();
      setAmount(amount-withdrawn);
  }

  return (
    <div className='balance__container'>
        <h1>Balance</h1>
        <div className='balance__content'>
        
        <h2>Current Balance is : {amount}</h2>  

        <button className='balance__button' onClick={changeHandler}>Check Balance</button>

        
        </div>
    </div>
  )
}

export default Balance