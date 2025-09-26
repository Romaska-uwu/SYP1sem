// Create proto object with properties and method
const proto = {
    name: 'John',
    surname: 'Doe',
    patronymic: 'Jane',

    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Surname: ${this.surname}`);
        console.log(`Patronymic: ${this.patronymic}`);
    }
};

// Create proto2 object using proto as prototype
const proto2 = Object.create(proto);

// Change name property
proto2.name = 'Jane';

// Call print method
console.log(proto2)
console.log("print data for proto");
proto.print();
console.log("print data for proto2");
proto2.print();