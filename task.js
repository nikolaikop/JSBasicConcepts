function solveEquation(a, b, c) {
  'use strict';
  let arr;
  // код для задачи №1 писать здесь
  let D = Math.pow(b,2) - 4*a*c
  console.log(D)

  if (D < 0) {
    arr = []
  } 
  else if (D == 0) {
    let x = -b/(2*a)
    arr = [x]
  }
  else {
    let x1 = ((-b+Math.sqrt(D))/(2*a))
    let x2 = ((-b-Math.sqrt(D))/(2*a))
    arr = [x1,x2]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict';
  let totalAmount;
  // код для задачи №2 писать здесь
  let P = percent/12/100 // 1/12 процентной ставки (от 0 до 1)
  let S = amount-contribution // Тело кредита = сумма кредита минус первоначальный взнос

  function monthDiff(futureDate) {
    var months;
  
    let presentDate = new Date()
    let presentMonth = presentDate.getMonth()
    let presentYear = presentDate.getFullYear()  
  
    let endOfLoanDate = futureDate
    let endOfLoanYear = parseInt(endOfLoanDate.slice(-4))
    let endOfLoanMonth = parseInt(endOfLoanDate.slice(0,2))
  
    months = (endOfLoanYear - presentYear) * 12;
    months -= presentMonth + 1;
    months += endOfLoanMonth;

    return months <= 0 ? 0 : months;
  }  

  let monthsAmount = monthDiff(date)
  let monthlyPayment = S*(P+(P/(Math.pow((1+P),monthsAmount) - 1)))
  totalAmount = monthsAmount*monthlyPayment

  console.log(totalAmount.toFixed(2))
  return totalAmount;
}

calculateTotalMortgage(10, 0, 10000, '02/01/2025')


