class Method {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends Method {
    groupTimes;
    constructor(name, address, time) {
        super(name, address);
        this.groupTimes = time;
    }
    startSession(time) {
        console.log(this.name, 'start a support session', time);
    }
}

class AppDev extends Method {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'Billed a app version', version);
    }
}

class Student extends Method {
    student(student) {
        console.log(this.name, 'Billed a routeen for', student);
    }
}
const amir = new Support("Amir Khan", "India");
const salman = new Support("Salman Khan");
const shakil = new AppDev("Shakil Khan", "BD", "Android Studio");
const alia = new Student("Alia Butt", "India");

alia.student("Sokina");
// shakil.releaseApp("1.5.3");
// amir.startSession(11);
// salman.startSession();

console.log(alia);
// console.log(shakil);
// console.log(amir);
// console.log(salman);