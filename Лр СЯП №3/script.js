// задание 1
const S = 23.5;
const n = 5;
const V_12 = 12.5;
arr = new Array();
arr[0] = 6 - Math.pow (Math.PI,2) + 3 * Math.exp(8);
arr[1] = 2 * Math.cos(4) + Math.cos(12) + 8 - Math.exp(3);
arr[2] = 3 * Math.sin(9) + Math.log(5) + S;
arr[3] = 2 * Math.tan(5) + 6 - n + V_12;
let min = max = arr[0];
for (let i = 1; i <= arr.length; i++){
    if(min >= arr[i])
    min = arr[i]
    if (max <= arr[i]) 
    max = arr[i]
}
console.log(min, max);

// задание 3.1
let arr_from = Array.from("Karianna", (h) => {return h+7});//K7,a7,r7
console.log(arr_from);

// задание 3.2
console.log(Array.of(4));

// задание 4
let arr_methods = [Math.pow, Array().pop, Array().push, Array().shift, Math.round, Math.floor, Array().slice, Array().sort];
console.log(arr_methods);
let arr_Array_methods = [];
let arr_Math_methods = [];

for (let i = 0; i < arr_methods.length; i++ ){
    if (Object.hasOwn(Math, arr_methods[i].name)){
        arr_Math_methods.push(arr_methods[i])
    } 
    else {
        arr_Array_methods.push(arr_methods[i])
    }
}

console.log(arr_Math_methods);
console.log(arr_Array_methods);

arr_Array_methods.push(Array().concat);
arr_Math_methods.unshift(Math.tan);

console.log(arr_Math_methods);
console.log(arr_Array_methods);

console.log(arr_methods);
console.log(arr_methods.length);
console.log(arr_Math_methods.length);
console.log(arr_Array_methods.length);

//задание 5
let str = 'Адамович Карианна Павловна';
document.write ('<h4>' + str + '</h4>');
document.write ('<h4>' + str.length + '</h4>');
document.write ('<h4>' + str.toUpperCase() + '</h4>');
document.write ('<h4>' + str.toLowerCase() + '</h4>');
document.write ('<h4>' + str.toLowerCase().concat(str.toUpperCase()) + '</h4>');

function name(str) {
    return str.split(/\s+/).map(( j, k) => k ? j.substring(0,1).toUpperCase() + '.' : j).join(' ');
}
document.write('<h4>' + name('Адамович Карианна Павловна') + '</h4>');

// задание 6
let date = new Date()
let table = document.createElement('table');
let tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Год';
tr.appendChild(document.createElement('td')).innerHTML = date.getFullYear();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Месяц';
tr.appendChild(document.createElement('td')).innerHTML = date.getMonth()+1;
tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'День';
tr.appendChild(document.createElement('td')).innerHTML = date.getDate();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Час';
tr.appendChild(document.createElement('td')).innerHTML = date.getHours();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Минуты';
tr.appendChild(document.createElement('td')).innerHTML = date.getMinutes();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Секунды';
tr.appendChild(document.createElement('td')).innerHTML = date.getSeconds();

document.body.appendChild(table);