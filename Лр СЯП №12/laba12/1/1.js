// Phonebook data
const phonebook = {
    "1": "111-2233",
    "2": "333-4455",
    "3": "555-6677",
    "4": "777-8899",
    "5": "999-1122"
};

let num = prompt("Введите число от 1 до 5, чтобы получить номер: ");
let phoneNum = phonebook[num];
if (phoneNum)
    alert("Вот соответсвующий номер: " + phoneNum);
else
    alert("Введенное вами значение не соотвествует ни одному номеру");
