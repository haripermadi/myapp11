import './styles.css'
import React from 'react'
import { FaPlus, FaEquals } from 'react-icons/fa';

import { sum, multiple, primeNumber, fibonanciFunc } from '../helper/index'
import Calculation from './Calculation'
import sequence from './Sequence'
import Sequence from './Sequence';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNum: null,
      secNum: null,
      result: 0,
      multiFirstNum: null,
      multiSecNum: null,
      multiResult: 0,
      primeN: 0,
      primeList: null,
      fibonacciN: 0,
      FibonacciList: null

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
    this.setState({
      result: sum(num1, num2)
    })
  }

  handleMultiple = () => {
    let num1 = parseInt(this.state.multiFirstNum)
    let num2 = parseInt(this.state.multiSecNum)
    this.setState({
      multiResult: multiple(num1, num2)
    })
  }

  handlePrime = () => {
    let result = primeNumber(parseInt(this.state.primeN))
    console.log('prime=======', result)
    this.setState({
      primeList: result
    })
  }

  handleFibonacci = () => {
    let result = fibonanciFunc(parseInt(this.state.fibonacciN))
    this.setState({
      FibonacciList: result
    })
  }

  render() {
    console.log('render------', this.state)
    return (
      <div className='container'>
        <Calculation
          title={'Task 1 Addition'}
          onChangeText1={(e) => this.handleInput(e, 'firstNum')}
          onChangeText2={(e) => this.handleInput(e, 'secNum')}
          result={this.state.result}
          onCalculate={this.handleCalculate} />
        <Calculation
          title={'Task 2 Multiple'}
          onChangeText1={(e) => this.handleInput(e, 'multiFirstNum')}
          onChangeText2={(e) => this.handleInput(e, 'multiSecNum')}
          result={this.state.multiResult}
          onCalculate={this.handleMultiple} />
        <Sequence
          title='Task 3 N Prime Number'
          desc='Input N to generate prime sequence'
          onChangeText={(e) => this.setState({ primeN: e.target.value })}
          onGenerate={this.handlePrime}
          buttonTitle='Generate Prime'
          dataList={this.state.primeList}
        />
        <Sequence
          title='Task 4 N Fibonacci Number'
          desc='Input N to generate fibonacci sequence'
          onChangeText={(e) => this.setState({ fibonacciN: e.target.value })}
          onGenerate={this.handleFibonacci}
          buttonTitle='Generate Fibonacci'
          dataList={this.state.FibonacciList}
        />
      </div>
    )
  }
}


export default App