console.log("Task #1");
arrWithStrExamples = ["t", "1", ".", "!", "\n"];
arrWithStrExamples.forEach(exampleStr => {
    console.log(`Проверка работы регулярного выражения 
    с точкой для строки ${exampleStr}: ${/./s.test(exampleStr)}`);
});

//2
console.log("Task #2");
const text = `
Lorem ipsum [u]dolor sit amet[/u], consectetur adipiscing elit. 
Mauris quis diam vitae nisl rhoncus pretium.
[u]Vestibulum ante ipsum primis in faucibus[/u] orci luctus et ultrices posuere cubilia curae;
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
`;

const regex = /\[u](.+?)\[\/u]/gs;
console.log(text.replace(regex, '<u>$1</u>'));

//3
console.log("Task #3");
const html = `
<p>Some text <a href="url">link</a> and more text</p>

<div>
  <a href="page">Internal page</a>
  Other content
</div>
`;

console.log(html.replace(/<a /g, '<some tag '));

//4
console.log("Task #4");
let str = 'Kariannna, Adamovich';

// Регулярное выражение находит подстроки
let pattern = /([a-zA-z]*), ([a-zA-Z]*)/;

// В функции замены переставляем подгруппы
let newStr = str.replace(pattern, '$2, $1');

console.log(newStr);

//5
console.log("Task #5");
// Create an object
const person5 = {
    name: 'Чонгук',
    age5: 30,
    email5: 'jonguk@example.com',
    city: 'Seul'
};

// Delete properties using rest syntax
const {age5, email5, ...result} =  person5;

// Output the remaining properties
console.log(result);

//6
console.log("Task #6");
const person6 = {
    name: 'Чонгук',
    age6: 30,
    email6: 'jonguk@example.com',
    city: 'Seul'
};

// Create new object removing properties
const {age6, email6, ...removed} = person6;

// New properties
const newProps = {
    name: 'Yana',
    surname: 'Shidlovskaya'
};

// Merge new properties
const res = {...removed, ...newProps};

// Output result
console.log(res);
