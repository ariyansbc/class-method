
class Name {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let myName = new Name("jalal");
let fname = new Name("shahriar Master");
var showMyName = myName.getName();
var fatherName = fname.getName();
console.log("my name is:", showMyName);
console.log("my father's name is:", fatherName);