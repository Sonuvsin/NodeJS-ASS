class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.FullName = function() {
            return this.FirstName + " " + this.LastName;
        }
    }
}


const jsonData = '{"FirstName": "Bhushan", "LastName" : "Bire"}';
const x = JSON.parse(jsonData);

var p = new Person("Bhushan", "Bire");
console.log(eval(p.FullName() === x.FirstName + " " + x.LastName));