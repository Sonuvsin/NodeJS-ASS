class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.FullName = function() {
            return this.FirstName + " " + this.LastName;
        }
    }
}

var p = new Person("Bhushan", "Bire");
console.log(eval(p.FullName() === "Bhushan Bire"));