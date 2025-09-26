/*
openedWindow - глобальная переменная для хранения данных о созданном окне
task61Open - функция для создания окна внутри вводим название окна
затем open для создания новой вкладки
task61Close - функция, которая закрывает созданную вкладку
 */
let openedWindow;
function task61Open(){
    let windowName = prompt("Введите название окна", "Default");
    openedWindow = window.open("", windowName);
    openedWindow.document.write("Страница под названием: " + windowName);
}

function task61Close(){
    if (openedWindow)
        openedWindow.close();
}

/*
создали списки с нужными параметрами
затем создали элемент таблицы и добавли строки базовые
затем в циклах получаем данные и добавляем соответсвуюшие строки в таблицу
 */
function task62() {
    let navigatorAttrs = ['userAgent', 'appVersion', 'appCodeName', 'platform']
    let screenAttrs = ['height', 'width', 'colorDepth'];
    let historyAttrs = ['length'];
    let locationAttrs = ['href', 'pathname', 'host']

    let oldTable = document.getElementById("browserInfo");
    if (oldTable)
        oldTable.remove();

    let table = document.createElement("table");
    table.id = "browserInfo";
    let tr = table.appendChild(document.createElement("tr"));
    tr.appendChild(document.createElement("td")).innerHTML = "Свойство";
    tr.appendChild(document.createElement("td")).innerHTML = "Значение";

    for (let i = 0; i < navigatorAttrs.length; i++) {
        tr = table.appendChild(document.createElement("tr"));
        tr.appendChild(document.createElement("td")).innerHTML = navigatorAttrs[i];
        tr.appendChild(document.createElement("td")).innerHTML = navigator[navigatorAttrs[i]];
    }

    tr = table.appendChild(document.createElement("tr"));
    tr.appendChild(document.createElement("td")).innerHTML = "javaEnabled()";
    tr.appendChild(document.createElement("td")).innerHTML = navigator.javaEnabled();

    for (let i = 0; i < screenAttrs.length; i++) {
        tr = table.appendChild(document.createElement("tr"));
        tr.appendChild(document.createElement("td")).innerHTML = screenAttrs[i];
        tr.appendChild(document.createElement("td")).innerHTML = screen[screenAttrs[i]];
    }

    for (let i = 0; i < historyAttrs.length; i++) {
        tr = table.appendChild(document.createElement("tr"));
        tr.appendChild(document.createElement("td")).innerHTML = historyAttrs[i];
        tr.appendChild(document.createElement("td")).innerHTML = history[historyAttrs[i]];
    }

    for (let i = 0; i < locationAttrs.length; i++) {
        tr = table.appendChild(document.createElement("tr"));
        tr.appendChild(document.createElement("td")).innerHTML = locationAttrs[i];
        tr.appendChild(document.createElement("td")).innerHTML = location[locationAttrs[i]];
    }

    document.body.appendChild(table);
}
