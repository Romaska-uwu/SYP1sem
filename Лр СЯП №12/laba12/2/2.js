let mySet = new Set();

mySet.add(1);
mySet.add(3);
mySet.add(5);
console.log(mySet);

console.log("Размер сета: " + mySet.size);

console.log("Есть ли элемент 1 в сете: " + mySet.has(1));
console.log("Есть ли элемент 3 в сете: " + mySet.has(3));
console.log("Есть ли элемент 5 в сете: " + mySet.has(5));
console.log("Есть ли элемент 2 в сете: " + mySet.has(2));


console.log("has() возвращает объект с типом: " + typeof mySet.has(1));

