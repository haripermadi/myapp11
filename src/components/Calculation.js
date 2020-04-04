import './styles.css'
import React from 'react'
import { FaPlus, FaEquals } from 'react-icons/fa';

const Calculation = ({ title, onChangeText1, onChangeText2, result, onCalculate }) => {
  return (
    <div className="task">
      <h3 className="title">{title}</h3>
      <div className="container-task">
        <div className="form-group mx-sm-3 mb-2">
          <input type="number" className="form-control text-center" placeholder="1" onChange={onChangeText1} />
        </div>
        <FaPlus className="icon-style" />
        <div className="form-group mx-sm-3 mb-2">
          <input type="number" className="form-control text-center" placeholder="1" onChange={onChangeText2} />
        </div>
        <FaEquals className="icon-style" />
        <span className="result">{result}</span>
      </div>
      <button type="submit" className="btn btn-primary mb-2 mx-sm-3 button-color" onClick={onCalculate}>Calculate</button>
    </div>
  )
}


export default Calculation
