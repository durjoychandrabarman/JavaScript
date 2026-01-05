/**
 * Loping Tecnique
 * 1. for loop 
 * 2.while loop
 * 3.do while
 * for of
 * for in
 */
const friends = ['Durjoy', 'Chandra', 'Barman','Prydumnna','roy']

for (const friend of friends){
    // console.log(friend)
}

for (i = 0; i<friends.length; i++){
    console.log(i)
    console.log(friends[i])
}
const numbers = [12,232,2322 ,23232,32323,3232,]
for (n=0; n<numbers.length; n++){
    console.log(numbers[n])
}

let D = 0;
while (D<friends.length){
    console.log(friends[D])
    D++;
}
