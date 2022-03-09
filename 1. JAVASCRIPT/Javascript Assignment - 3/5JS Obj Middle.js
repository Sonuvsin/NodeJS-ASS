var p = {
    FirstName: "BHUSHAN",
    LastName: "Bire"
}

class Person {
    constructor(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}

console.log(p.MiddleName);
p.MiddleName = "Narendra";
console.log(p.MiddleName);