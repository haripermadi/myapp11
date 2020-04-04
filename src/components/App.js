import './styles.css'
import React from 'react'
import { FaPlus, FaEquals } from 'react-icons/fa';

import { sum } from '../helper/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNum: null,
      secNum: null,
      result: 0

    }
  }

  handleInput = (e, type) => {
    e.preventDefault()
    console.log('---input----', e.target.value, type)
    this.setState({
      [type]: e.target.value
    })
  }

  handleCalculate = () => {
    let num1 = parseInt(this.state.firstNum)
    let num2 = parseInt(this.state.secNum)
    console.log(num1, typeof num1, num2, typeof num2, sum(num1, num2))
    this.setState({
      result: sum(num1, num2)
    })
  }

  render() {
    console.log('render------', this.state)
    return (
      <div className='container'>
        <div className="task">
          <h3 className="title">Task 1 Addition</h3>
          <div className="container-task">
            <div className="form-group mx-sm-3 mb-2">
              <input type="number" className="form-control text-center" placeholder="1" onChange={(e) => this.handleInput(e, 'firstNum')} />
            </div>
            <FaPlus className="icon-style" />
            <div className="form-group mx-sm-3 mb-2">
              <input type="number" className="form-control text-center" placeholder="1" onChange={(e) => this.handleInput(e, 'secNum')} />
            </div>
            <FaEquals className="icon-style" />
            <span className="result">{this.state.result}</span>
          </div>
          <button type="submit" className="btn btn-primary mb-2" onClick={this.handleCalculate}>Calculate</button>
        </div>
        <div>
          <h3>Task 2 Multiple</h3>
        </div>
        <div>
          <h3>Task 3 N Prime Number</h3>
        </div>
        <div>
          <h3>Task 4 N Fibonacci Number</h3>
        </div>
      </div>
    )
  }
}


export default App