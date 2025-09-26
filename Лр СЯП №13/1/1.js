let n = prompt("Введите число n");
if (!(/^[0-9]+$/.test(n)))
    alert("Вы ввели не число");
else {
    let intN = parseInt(n);
    let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    console.log(intN);
    if (arr.includes(intN))
        alert(`Число ${n} есть в массиве со случайными числами: ${arr}`);
    else
        alert(`Числа ${n} нет в массиве со случайными числами: ${arr}`);
}

