import React, { useState, useEffect } from 'react';
import './chooseclass.scss'
import dummyData from './dummyData.json'
import { useHistory } from "react-router-dom";


const ChooseClass = () => {
 
  let history = useHistory();
  function handleClick() {
    history.push("/students-tracker");
  }
  return(
    <div className="container">
      <div className="welcome-msg">
        <h3>Welcome back <span className="userName">{dummyData[0].userName} </span>!</h3>
        <p>Please choose which class would you like to access:</p>
      </div>
      <div className="btnDiv">
        <button type="button" onClick={handleClick}>
          {dummyData[0].classes[0]}
        </button>
        <button type="button" onClick={handleClick}>
          {dummyData[0].classes[1]}
        </button>
        <button type="button" onClick={handleClick}>
          {dummyData[0].classes[2]}
        </button>
      </div>
    </div>
  )
}
export default ChooseClass