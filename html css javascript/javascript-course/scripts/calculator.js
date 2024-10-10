let calculation = localStorage.getItem('calculation') || '';

showNum();

function updateCalculation(num = '') {
  localStorage.setItem('calculation', calculation);
  calculation += num;
  console.log(calculation);
  showNum();
}

function showNum() {
  document.querySelector('.js-number').innerHTML = calculation;
}

//function saveCalculation() {
//localStorage.setItem('calculation',calculation);
//}
