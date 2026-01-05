const college = {
    collegeName : 'Thakurgoan Govt college',
    group : ['science', 'Manobik', 'Commerce'],
    class :['11','12'],
    student :{
        tottal: 150 ,
        studentLingo :{
            Chartro : '100 Jon',
            Chartri : '50 jon'
        }
    }
}  
// console.log( college)
// console.log( college.student.studentLingo)
college.student.studentLingo.Chartri ='nai amader ai khane kono maiya nai '
console.log( college.student.studentLingo.Chartri)
college.class[2]=13;
console.log(college.class)
console.log(college.class[1])
delete college.group;
console.log(college)