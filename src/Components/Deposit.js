import React from 'react';
import { useState } from 'react';
import "./Deposit.css";

const Deposit = () => {

    const[amount,setAmount] = useState(100);
    const changeHandler = (e) =>{
        e.preventDefault();
        setAmount(amount+10);
    }

  return (
    <div className='deposit__container'>
    <h1>Original Balance ${amount}</h1>
   

    <div className="deposit__content">

    <h2> Deposit amount : ${10} </h2>

    <button onClick = {changeHandler}>Deposit Money</button>

     

    </div>
    </div>
  )
}

export default Deposit