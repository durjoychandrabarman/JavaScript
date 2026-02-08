const numbers = [2,3,4,5,6,7,8,10]
let arroy = [];
for (let num of numbers){
    const number = num+1;
    arroy.push(number)
    
}
// console.log(arroy)

// use array map 
const newArray = numbers.map(value => value+1);
// console.log(newArray)

const squar = numbers.map(squar => {
    return squar*squar;
})
// console.log(squar)

const friends = ['durjoy','rayhan','prince','produmnna']
for (let fnd of friends){
    // console.log(fnd)
}

const loopOfFriends = friends.map(fnd => {
    return fnd;
});
console.log(loopOfFriends)
