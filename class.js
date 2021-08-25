class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const amir = new Support("Amir Khan");
const salman = new Support("salman Khan");
amir.startSession();
salman.startSession();
// console.log(amir);
// console.log(salman);