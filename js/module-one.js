// const totalPrice = 108;
// const age = 36;
// const userName = 'Alex';
// const message = 'Hello World';
// const isOpen = true;
// const shouldConfirm = false;

// let height = 123;
// height = 54;

// console.log(5)
// console.log(age)
// console.log(message)
// console.log('My age is:', age, 'years old!')
// console.log('My name is:', userName, '.')

// const type = typeof 'hi there';
// console.log(type);
// const weight = typeof 156;
// console.log(weight);
// const isClosed = typeof false;
// console.log(isClosed);

// // alert('dnvfjnv')
// // console.log('Say:', message)

// // const shouldRenew = confirm('Would like to renew subscription?');
// // console.log(shouldRenew);

// // let quantity = prompt('Write the number of pessengers');
// // quantity = Number(quantity);
// // console.log(quantity);
// // console.log(typeof quantity);

// let elementWidth = "50px";
// const result = Number.parseInt(elementWidth);
// console.log(typeof result);

// let elementHeight = '200.11px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

// let salary = 1200.65748;
// salary = salary.toFixed(2);
// console.log(salary);

// const value = 'today is friday';
// console.log(Number(value));
// console.log(typeof Number(value));


// console.log(Math.pow(2,3));
// console.log(2**3);

// let prac = prompt('give me a number');
// prac = Number(prac);
// console.log(prac);
// let power = prompt('give me a power');
// power = Number(power);
// console.log(power);
// console.log(prac ** power);

// const max = 100;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);
// const message = 'Q: how many symbols in this stroke?';
// console.log(message.length);
// const firstName = 'Alex';
// const lastName = 'Vovk';
// console.log(firstName + ' ' + lastName);
// function add(a,b,c) {
// console.log(`Addition result equals ${a+b+c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase(brand);
// console.log(normalizedBrand);
// const brand = 'SamSung';
// const normalizedBrand = brand[0] + brand.slice(1).toLowerCase();
// console.log(normalizedBrand);

// const blockWord1 = 'spam';
// const blockWord2 = 'sale';
// const message = 'Do you want to go to Canada? It is not a spam.';
// const message2 = 'Black Friday! BIG SALE!!!';

// console.log(message.includes(blockWord1));
// console.log(message2.includes(blockWord1));
// console.log(message2.includes(blockWord2));
// const normalizedMessage = message2.toLowerCase();
// console.log(normalizedMessage.includes(blockWord2));
// console.log(3 && 'NaN' && 34 && 'false' && 'hello' && 'finished');
// const brand = 'samsung';
// const normalizedBrand = brand[0].toUpperCase()+brand.slice(1);
// console.log(normalizedBrand);
// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`The number ${number} is under
//     number ${x1}?`, number < x1);
// console.log(x1 < number && number < x2);
// console.log(number < x1 || number > x2);
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Can open chat?', canOpenChat);
// const sub = 'pro';
// const canAccessSite = sub === 'pro' || sub === 'vip';
// console.log('Can access the site?', canAccessSite);

function makeMessage (name, price) {
    const message =`You picked ${name}, price per item is ${price} credits`;
    return message;
};
function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = orderedQuantity*pricePerItem;
    return totalPrice;
};
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    const message=`You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
    return message;
}
function isAdult(age) {
    const passed = age>=18;
    return passed;
}
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = password===SAVED_PASSWORD;
    return isMatch;
}
function isAdult(age) {
    const canDrinkIf = age>=21;
    return canDrinkIf;
}
