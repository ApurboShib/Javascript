class Student {

    name = 'joy Shib';
    id = 111;
    batch = '57(C)';


    constructor(name, id, batch) {
        this.name = name;
        this.id = id;
        this.batch = batch;
    }

    print() {
        console.log('Hello from the print method.');
    }


    display() {
        console.log(this.name); 
    }
}

const obj = new Student("Kashem mia", 222, "58(B)");
console.log('My name is : ', obj.name);
console.log('My id is : ', obj.id);
console.log('My current batch is : ', obj.batch); // Fixed batch reference
obj.print(); 
obj.display();