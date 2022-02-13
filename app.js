function updateAmount(product, price, isIncreasing) {

    const productNumber = document.getElementById(product + "-number");
    let productNumberValue = productNumber.value;

    if (isIncreasing) {
        productNumberValue = parseInt(productNumberValue) + 1;
    } else if (productNumberValue > 0) {
        productNumberValue = parseInt(productNumberValue) - 1;
    }
    productNumber.value = productNumberValue

    // updateBlance;
    const updateBlance = Number(productNumberValue) * price;
    const totalBlance = document.getElementById(product + "-total");
    totalBlance.innerText = updateBlance;

};



//phoneIncrease;
const phoneIncreaseAmount = document.getElementById('phone-plus');
phoneIncreaseAmount.addEventListener('click', e => {
    updateAmount("phone", 1219, true);

});

//phoneDecrease;
const phoneDecreaseAmouont = document.getElementById('phone-minus');
phoneDecreaseAmouont.addEventListener('click', e => {
    updateAmount('phone', 1219, false);
});


//phoneCaseIncrease;
const phoneCaseIncreaseAmount = document.getElementById('case-plus');
phoneCaseIncreaseAmount.addEventListener('click', e => {
    updateAmount('case', 59, true);
})

//phoneCaseDecrease;
const phoneCaseDecreaseAmount = document.getElementById('case-minus');
phoneCaseDecreaseAmount.addEventListener('click', e => {
    updateAmount('case', 59, false);
})