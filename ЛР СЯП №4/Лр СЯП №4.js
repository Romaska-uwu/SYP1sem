//Первое задание
function Gruppa(num, speciality, amount) {   //this - это ключевое слово которое содержит в себе объект выполняемого кода 
	this.num = num;                             
	this.speciality = speciality;
	this.amount = amount;
    document.write('Группа №' + this.num + ', специальность ' + this.speciality + ', изначально студентов' + this.amount + '.<br>');

	this.add_stud = function add_stud(k) {
		this.amount += k;
		document.write('В группу №' + this.num + ' добавили ' + k + ' студента(ов).<br>');
	}
	this.sub_stud = function sub_stud(k){
		this.amount -= k;
		document.write('Из группы №' + this.num + ' отчислили ' + k + ' студента(ов).<br>' );
        document.write('Группа №' + this.num + ', специальность ' + this.speciality + ', студентов в итоге' + this.amount + '.<br>' + '<br>');
	}
 }

let gr1 = new Gruppa(1, 'ИСиТ', 30);
gr1.add_stud(7);       
gr1.sub_stud(8);
let gr5 = new Gruppa(5, 'ИСиТ', 30);
gr5.add_stud(3);
gr5.sub_stud(1);
let gr7 = new Gruppa(7, 'ПОИТ', 30);
gr7.add_stud(0);
gr7.sub_stud(5);
let gr9 = new Gruppa(9, 'ПОИТ', 30);
gr9.add_stud(4);
gr9.sub_stud(15);
console.log(gr1);
console.log(gr5);
console.log(gr7);
console.log(gr9);
document.write('<br><br>');

//Второе задание
class Student {
	constructor (name, surname, physics, math, informatics){
	//this.name = name;
	this.surname = surname;
	this.physics = physics;
	this.math = math;
	this.informatics = informatics;

	this.avg_rating = function avg_rating(){
		document.write('Средний балл студента по имени ' + this.name + ' равен ' + ((this.physics + this.math + this.informatics) / 3).toFixed(2) + '<br>');
	}

	this.introduce = function introduce(){
		alert('Фамилия и имя студента ' + this.name + ' ' + this.surname);
	}

	this.info = function info(){
		document.write('Информация о студенте:<br>' + 'Фамилия: ' + this.surname + '<br>Имя: ' + this.name + '<br>Оценка по физике: ' + this.physics + '<br>Оценка по математике: ' + this.math + '<br>Оценка по информатике: ' + this.informatics + '<br>');
	}
}
}

Student.prototype.name = Кари;

let stud1 = new Student('Карианна', 'Адамович', 8, 9, 10);
let stud2 = new Student('Виктория', 'Шманай', 9, 8, 10);
let stud3 = new Student('Анастасия', 'Собаль', 7, 9, 9);
let stud4 = new Student('Яна', 'Шидловская', 7, 8, 10);
let stud5 = new Student('Полина', 'Демидович', 9, 10, 9);

stud1.info();
stud1.avg_rating();
document.write('<br>');
stud2.info();
stud2.avg_rating();
document.write('<br>');
stud3.info();
stud3.avg_rating();
document.write('<br>');
stud4.info();
stud4.avg_rating();
document.write('<br>');
stud5.info();
stud5.avg_rating();
document.write('<br>');

console.log(stud1);
console.log(stud2);
console.log(stud3);
console.log(stud4);
console.log(stud5);



//Третье задание
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);                  
delete arr[3];
console.log(arr);

console.log(2 in arr);                //+
console.log('add_stud' in Gruppa);    //-       //проверяет есть инекоторое свойиство или метод у того или иного объекта
console.log('chemistry' in Student);  //-
console.log(arr instanceof Array);    //+       // проверят принадлежит ли некоторый объект объектной модели java
console.log(stud1 instanceof Object); //+
console.log(gr1 instanceof String);   //-

function return5(){
	return 5;
}

console.log(typeof Gruppa);
console.log(typeof Gruppa.prototype.name);
console.log(typeof Gruppa.prototype.add_stud);
console.log(typeof Gruppa.prototype.sub_stud);
console.log(typeof gr1.add_stud);
console.log(typeof gr1.sub_stud);
console.log(typeof gr1);
console.log(typeof Student);
console.log(typeof Student.prototype.avg_rating);
console.log(typeof Student.prototype.introduce);
console.log(typeof Student.prototype.info);
console.log(typeof stud1);
console.log(typeof stud1.name);
console.log(typeof stud1.surname);
console.log(typeof stud1.physics);
console.log(typeof stud1.math);
console.log(typeof stud1.informatics);
console.log(typeof arr);
console.log(typeof return5);