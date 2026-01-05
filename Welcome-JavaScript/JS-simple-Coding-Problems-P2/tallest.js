const height = [ 24, 45, 67, 68 ,46, 87,88, 100,22,66,]

function getTallest ( numbers){
    let maxtheNumber = numbers[0]
    for (const num of numbers){
        if (num > maxtheNumber){
            maxtheNumber = num
        }
    }
    return maxtheNumber;
       
}

const Max = getTallest(height)
console.log('The max Number is :',Max)