//Dates
// let myDate = new Date();
// console.log(myDate)
// console.log(myDate.getTime()) // gives time in sec
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())


// let elemClass = document.getElementsByClassName('container');
// let elem = document.getElementById('click')
// console.log(elem)
// console.log(elemClass)
// elemClass[0].classList.add("bg-primary")
// elemClass[1].classList.add("text-success")
// elemClass[1].classList.remove("text-success")

let tn = document.getElementsByTagName('div');
console.log(tn);
let createdElem = document.createElement('p');
createdElem.innerText = "this is a created para"
tn[0].appendChild(createdElem);
let createdElem2 = document.createElement('b');
createdElem2.innerText = 'this is a created bold text'
tn[0].replaceChild(createdElem2, createdElem);

// arrow function -->
// function sum (a,b) {
//     return a+b;
// }
// summ = (a,b) =>
// {return a+b;}
let a = 0;
function logkaro() {
    a = a+1;
    document.querySelectorAll('.container')[1].innerHTML = "<b>logged</b>"
    console.log(a);
}

// firstContainer.addEventListener('mouseover', logkaro);

//setinterval settimeout
clr = setInterval(logkaro, 2000);
function clear() {
    clearInterval(clr);
}
setTimeout(clear, 10000);

// js localstorage
// localStorage
// localStorage.setItem('name', 'Shruti')
// localStorage
// localStorage.setItem('roll', '2105279')
// localStorage
// localStorage.getItem('roll')

//json

obj = {name : 'Shruti', length: 1, a : {that : 'tha"t'}};
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse(`{"name":"Shruti","length":1,"a":{"that":"tha\\"t"}}`);
console.log(parsed)