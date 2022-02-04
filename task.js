'use strict';
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let D = Math.pow(b,2) - 4*a*c;
  console.log(D);

  if (D < 0) {
    arr = [];
  } 
  else if (D == 0) {
    let x = -b/(2*a);
    arr = [x];
  }
  else {
    let x1 = ((-b+Math.sqrt(D))/(2*a));
    let x2 = ((-b-Math.sqrt(D))/(2*a));
    arr = [x1,x2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №2 писать здесь
  if(isNaN(percent)) return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  if(isNaN(contribution)) return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  if(isNaN(amount)) return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;

  let P = percent/12/100; // 1/12 процентной ставки (от 0 до 1)
  let S = amount-contribution; // Тело кредита = сумма кредита минус первоначальный взнос

  let presentDate = new Date();  

  let monthsAmount = (date.getYear() * 12 + date.getMonth()) - (presentDate.getYear() * 12 + presentDate.getMonth());
  let monthlyPayment = S*(P+(P/(Math.pow((1+P),monthsAmount) - 1)));
  let totalAmount = Number((monthsAmount*monthlyPayment).toFixed(2));

  return totalAmount;
}

calculateTotalMortgage()
