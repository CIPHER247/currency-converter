// function Multiplication(firstNumber,secondNumber){

//     console.log(firstNumber * secondNumber);

// }
// Multiplication(5,10)

// let valueEntered=prompt('Enter naira value:');

document.getElementById("submit").onclick = function () {
  const num = document.getElementById("number").value;
  const re = document.getElementById("results");

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  console.log(`from: ${from}`);
  console.log(`to: ${to}`);

  // convert rates to dollar first
  const price = {
    "usd":1,
    "ngn": 1449,
    "gbp": 0.76,
    "sgd": 1.34
  }

  // console.log(price["ngn"])
  // function nairaToDollar(naira) {
  //   dollarValue = naira / 1462;
  //   return dollarValue;
  //   // alert(`The  ${Naira} Naira is equal to ${dollarValue} Dollars `);
  // }
  // nairaToDollar(num);

  let priceOfFrom = price[from]
  let priceOfTo = price[to]
  console.log(priceOfFrom)
  console.log(priceOfTo)

  let result = priceOfTo / priceOfFrom
  result = num * result;

  console.log(`converting ${num} ${from} to ${priceOfTo} ${to} is equal to ${result}`)


  // let dol = nairaToDollar(num);

  re.innerHTML = `converting ${num} ${from} to  ${to} is equal to ${result}`;
};

// document.getElementById("submit").onclick =function () {
// const amount =document.getElementById('amount').value;
// const result=document.getElementById('result');

// function dollarToNaira(dollar) {
//     nairaValue = dollar * 1462;
//     return nairaValue;
//   }
//   dollarToNaira();

//   result.innerHTML= dollarToNaira(amount);

// }
