const student =  {
    name : "Joy Shib",
    age : 22,
    schollo_name : "Scholarshome",
    year : "inter",
    location : "Shahi Eidgah",
    AcademicYear : 2018,
    current_student : true,
    speciality :   {
        gander : "Male",
        height : "long",
        hair_type : "curly",
        nicknames : ['goru', 'chagol', 'kutta', 'gadha']
    }
}

// print the full object.
console.log(student);
// print the speciality obj.
console.log(student.speciality);
// print the gander.
console.log(student.speciality.gander);
// print the neaknames.
console.log(student.speciality.nicknames);
// print the particular neacnames.

console.log(student.speciality.nicknames[3]);
// change the value inside the speciality obj.
student.speciality.gander = "female";
console.log(student.speciality.gander);