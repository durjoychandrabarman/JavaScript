const today = new Date ();
console.log(today)

const date = new Date ('2062-10-19');
console.log(date.getMonth())
console.log(date.getDate())

const specifiDate = new Date (2091, 0, 26)
specifiDate.setMonth(10)
console.log(specifiDate);
console.log(specifiDate.toLocaleString('en-GB'))