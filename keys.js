// ekta object er koto gula keys ache setake alada kore ekta array er moddhe niye ashte pari.

const student =  {
    name : "Joy Shib",
    age : 22,
    schollo_name : "Scholarshome",
    year : "inter",
    location : "Shahi Eidgah",
    AcademicYear : 2018,
    current_student : true
}
const ele = Object.keys(student);
console.log(ele);

// same vabe amra caile values gulakeo niye ashte pari..

const val = Object.values(student);
console.log(val);