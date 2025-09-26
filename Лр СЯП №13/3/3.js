function randomArray() {
    const length = Math.floor(Math.random() * 10);
    return Array.from({length}, () => randomChar());
}

function randomChar() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

let char = prompt("Введите символ");
if (char)
    char = char.toUpperCase();
for (let i = 0; i <= 5; i++) {
    let arr = randomArray();
    if (arr.includes(char))
        alert(`Символ ${char} есть в массиве номер ${i+1}`);
    console.log(`Есть ли символ ${char} в массиве ${arr}. 
    \nТест includes: ${arr.includes(char)}
    \nТест indexOf: ${arr.indexOf(char)}`);
}