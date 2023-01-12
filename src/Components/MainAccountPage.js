import React from 'react'
import "./MainAccountPage.css";
import { useNavigate } from 'react-router-dom';

const MainAccountPage = () => {

  const navigate = useNavigate();

  return (
    <div className='mainAccountPage__container'>
    <h1>Welcome User !</h1>

    <h2>Balance: $75</h2>

    <div className='mainAccount__content'>
  
    <button onClick ={() => navigate('/deposit')}className='deposit__money'>
      Deposit Money
    </button>

    <button onClick ={() => navigate('/withdraw')} className='withdraw__money'>
      Withdraw Money
    </button>

    <button onClick ={() => navigate('/balance')} className='check__money'>
      Check Balance
    </button>
    
    </div>
    </div>
  )
}

export default MainAccountPage