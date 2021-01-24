// Pass parameter to class method

class MyAge {
    constructor(year) {
        this.year = year;
    }
    age(x) {
     
        return x - this.year;
       
    }
}
var date = new Date();
var currentYear = date.getFullYear();

let ShowAge = new MyAge(1996);
let myCurretAge = ShowAge.age(currentYear);
console.log("I am:", myCurretAge , "years old");