
class MyAge {
    constructor(year) {
        this.year = year;
    }
    age() {
        var date = new Date();
        var currentYear = date.getFullYear();
        var myAge = currentYear - this.year;
        return myAge;
    }
}
let ShowAge = new MyAge(1994);
let myCurretAge = ShowAge.age();
console.log("I am:", myCurretAge , "years old");