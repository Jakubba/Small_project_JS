const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('cost');

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + (newPrice * newTip)) / newPeople; 
    costInfo.style.display = "block";
    cost.textContent = sum.toFixed(2)
}

const showBill = () => {
if(price.value =='' || people.value == '' || tip.value == 0){
    error.style.display = 'block' ;
}else{
    error.style.display = 'none'
    countBill();

}
}


countBtn.addEventListener('click', showBill)