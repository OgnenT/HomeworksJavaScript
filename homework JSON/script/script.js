fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json')
    .then((response) => response.json())
    .then((students) => {
        // console.table(students);
        // console.table(studentSentence(students));
        // console.table(maleStudentsNoSkopje(students)); //All male students that are not from Skopje
        // console.table(femaleStudentsNoUnderEighteen(students)); //All female students that are not under 18 years old.
        // console.table(avarageAgeStudents(students)); //All female students that are not under 18 years old.
        // console.log(avarageAgeStudents(students));
        console.log(femaleStudentEndA(students));
    })
    .catch(err => console.log(err));

// 1.  For every student log the following sentence: "FULL_NAME .......................
let studentSentence = students => students.map(s => `${s.firstName} ${s.lastName}
 is comming from ${s.city}, he is ${s.age} years old and he ${onlyPass(s.averageGrade)} the class`);
let onlyPass = averageGrade => (averageGrade > 1) ? `PASS` : `FAIL`;

// function onlyPass(averageGrade) {
//     if (averageGrade > 1) {
//         return `PASS`
//     } else {
//         return `FAIL`
//     }
// }


// 2. All male students that are not from Skopje
let maleStudentsNoSkopje = students => students.filter(s => s.city !== "Skopje" && s.gender === "Male").map(s => s.firstName);

// 3. All female students that are not under 18 years old.
let femaleStudentsNoUnderEighteen = students => students.filter(s => s.gender === "Female" && s.age > 17).map(s => s.firstName);

// 4. The average age of the students.
let avarageAgeStudents = students => students.map(s => s.age).reduce(s => s += (s.age, 200) / 200);

// 5. All female students with a last name ending with A.
let femaleStudentEndA = students => students.filter(s => s.firstName).map(s => (s.firstName.slice(-1) === "a") ? `That name is: ${s.firstName}`: " ");

