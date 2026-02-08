const personalInfo = {
    name : 'Durjoy',
    age : 20,
    'isJob':false,
    details :{
        fatherName : 'Nilkantha',
        status : 'single',
        isMarrid : false,
        fatherDetails : {
            age : 40,
            salary : 18000
        }
    }
}

//📌 nested object er Value Access whith dot notations
// console.log(personalInfo.name,personalInfo.details.fatherName)
// console.log(personalInfo.details.fatherDetails.age)

//📌 nested object er Value Access whith braket[] notations
// console.log(personalInfo['name'])
console.log(personalInfo['details'] ['fatherDetails'] ['age'])
console.log(personalInfo['isJob'])

// 📌 Optional chaining
console.log(personalInfo.details?.anatherName?.age)