let name = prompt("Введите имя: ", "Аноним");
let title = document.getElementById("title");
if (!name)
    name = "Аноним";
let str = `Привет, ${name}!`;
title.textContent = str;
alert(str);