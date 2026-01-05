function listOfEven (numbers){
    let evenList =[];
    for(const num of numbers){
       if(num % 2 === 0){
            // console.log(num)
            evenList.push(num)          
       }
    }
    return evenList ;
}

let listNumber = [1,2,3,4,5,6,7,8,9,10]
const theList = listOfEven(listNumber);
console.log(theList)

function sumOfEven (numbers){
    let sum = 0;
    for(const num of numbers){
       if(num % 2 === 0){
            sum = sum + num;
            
       }
    }
    return sum;
}

const sumList = sumOfEven(listNumber);
console.log('Even number sum of the list:', sumList)