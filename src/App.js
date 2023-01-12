
import React from 'react';
import SignUppage from './Components/SignUppage';
import MainAccountPage from './Components/MainAccountPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Deposit from './Components/Deposit';
import Balance from './Components/Balance';
import Withdraw from './Components/Withdraw';


const App = () => {
  return (

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SignUppage />}/>
      <Route path='/mainAccountPage'element = {<MainAccountPage />} /> 
      <Route path = '/deposit' element={<Deposit />}/>
      <Route path='/balance' element={<Balance />}/>
      <Route path='/withdraw' element={<Withdraw />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App