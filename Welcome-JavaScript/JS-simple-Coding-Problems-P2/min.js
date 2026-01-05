const age = [2, 4, 5, 6,7 ,8 ,9 ,3, 1,56, 45,100]

function getMin(n){
    let A = n[0]
    for (const i of n){
        if(i < A){
            A = i;
        }

    }
    return A;
}

const minAge = getMin(age);
console.log('The mix number:',minAge)