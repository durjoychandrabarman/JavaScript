function add ( num1 , num2){
    const sum = num1 +num2;
    return sum;
}

function diffrence (num1 , num2){
    const diffren = num1 - num2;
    return diffren;
}

function multipol (a , b){
    return a*b;
}

function devided (num1 , num2){
    return num1%num2;
}

function calculator ( a , b, opration){
    if (opration === 'add'){
        const result =add(a , b);
        return result;
    }
    else if (opration === 'devided'){
        const result = devided (a , b)
        return result;
    }
    else if(opration === 'multipol'){
        return multipol(a, b)
    }
    else if (opration === diffrence){
        return diffrence(a,b)
    }
    else{
        return 'something is not defient'
    }
}

const functionCall = calculator (8,2, 'add')
console.log(functionCall)