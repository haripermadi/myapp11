import './styles.css'
import React from 'react'

const Sequence = ({ title, desc, onChangeText, onGenerate, buttonTitle, dataList }) => {
  return (
    <div className="task">
      <h3 className="title">{title}</h3>
      <div className="container-prime">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="prime" className="small-text">{desc}</label>
          <input type="number" className="form-control text-center" placeholder="1" onChange={onChangeText} />
        </div>
        <button type="submit" className="btn btn-primary mb-2 button-prime button-color" onClick={onGenerate}>{buttonTitle}</button>
      </div>
      <div className="container-list">
        {
          dataList && dataList.map(value => (
            <div className="list"><span className="list-text">{value}</span></div>
          ))
        }
      </div>
    </div>
  )
}


export default Sequence
