// object
// non-primitive data types.

const student =  {
    name : "Joy Shib",
    age : 22,
    schollo_name : "Scholarshome",
    year : "inter",
    location : "Shahi Eidgah",
    AcademicYear : 2018,
    current_student : true
}

const Uni = {
    ranking : "1st",
    Quality : "Best",
    Education_curriculam : "Engilsh/Bangla",
    located : "Sylhet",
    isBest : true
}
console.log(student); // object er vitore ja data ache sob print dibe
console.log(Uni); // object er vitore ja data ache sob print dibe

// jodi specific kno data dekjhte cai taile ...(dot diye seta access korte parbo).

console.log(student.age);
console.log(Uni.ranking);

// we can also change the data and insert the new data in my objects.

student.age = 100;
student.name = "kholiullah";

console.log(student.name);
console.log(student.age);