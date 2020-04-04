// sum
function sum(num1, num2) {
  return num1 + num2
}

// multiple
function multiple(num1, num2) {
  return num1 * num2
}


function primeNumber(n) {
  //check prime number
  function checkPrime(num) {
    if (num < 2) {
      return false
    } else if (num === 2) {
      return true
    } else {
      for (let j = 2; j < num; j++) {
        if (num % j === 0) {
          return false
        }
      }
      return true
    }
  }
  const primeNumberList = []
  for (let i = 2; primeNumberList.length < n; i++) {
    if (checkPrime(i)) {
      primeNumberList.push(i)
    }
  }
  return primeNumberList
}

// first N fibonanci
function fibonanciFunc(num) {
  let result = [0, 1]

  for (let i = 2; i < num; i++) {
    // console.log(i,'---',i-1,i-2)
    result.push(result[i - 1] + result[i - 2])
  }

  return result
}

// console.log(sum(1,99))
// console.log(multiple(1,99))
// console.log(primeNumber(4)) // 2,3,5,7
// console.log(fibonanci(5)) // 0,1,1,2

export {
  sum,
  multiple,
  primeNumber,
  fibonanciFunc
}