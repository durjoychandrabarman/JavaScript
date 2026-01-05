function evenAverage ( numbers){
    const even =[];
    for (num of numbers){
        if (num % 2 === 0 ){
            even.push(num)
        }
    }
    console.log(even)
    let sum = 0;
    for (evenNumber of even){
        sum = sum + evenNumber;
    }
    const length = even.length;
    console.log(sum , length)
    const averageEven = sum / length
    return averageEven;
}

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10]
const average = evenAverage (numbers);
console.log( 'avareg is the even number is :',average)