let arr = Array.from({length: 10},
    () => Math.floor(Math.random() * 10));
arr.push(NaN);
console.log(arr)
console.log(`Тест indexOf для проверки есть ли NaN: ${arr.indexOf(NaN)}`);
console.log(`Тест includes для проверки есть ли NaN: ${arr.includes(NaN)}`);
