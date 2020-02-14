function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

// let student = new Person('Ognen', 'Temel', 30);

function Student(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
    }
    this.studentsAcademy = function () {
        console.log(`${this.firstName} is on the Academy: ${academyName}`)
    }
}

let student1 = new Student("SEDC", 123, 'Ognen', 'Temelkovski', 30);
let student2 = new Student("FEIT", 456, 'Aco', 'Snagata', 31);
console.log(student1);
console.log(student2);
student1.study();
student2.study();
student1.studentsAcademy();


// let student3 = new Student("MFS", 789, 'Gorjan', 'Temelkovski', 30);

function DesignStudent(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.isStudentOfTheMonth = true;
    this.attendAdobeExam = function () {
        console.log(`The student ${firstName} is doing an adobe exam!`)
    }
}

let student3 = new DesignStudent("MFS", 789, 'Gorjan', 'Temelkovski', 30);
console.log(student3);

function CodeStudent(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.hasIndividualProject = '';
    this.hasGroupProject = '';
    this.doProject = function () {
        if (hasIndividualProject.length > 0) {
            return hasIndividualProject.value; //////////////////////////////////////////////////////////
        }
        return false;
    }
}

let student4 = new CodeStudent("Finki", 101, 'Pero', 'Perovski', 28);
console.log(student4);